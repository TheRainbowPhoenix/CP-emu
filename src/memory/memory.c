#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <endian.h>

#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif

#include "../int.h"
#include "memory.h"
#include "specialAddrs.h"
#include "../cpu.h"
#include "../interrupts.h"
#include "../hardware/display/display.h"
#include "../config.h"

extern CpuState cpu;

// u8 memory[0x88023F98] = {0};
// u8* memory = NULL;

// Page table
// The first half is virtual memory -> host memory
// The second half is physical memory -> host memory
// TODO: Proper MMU emulation
void* pageTable[0x100000] = {0};

void createMemArea(void* hostMem, u32 start, u32 end) {
  for (u32 i = start; i < end; i += 0x1000) {
    pageTable[i / 0x1000] = hostMem + (i - start);
  }
}

void* allocMemArea(u32 start, u32 end) {
  void* hostMem = malloc(end - start);
  memset(hostMem, 0x55, end - start);
  createMemArea(hostMem, start, end);
  return hostMem;
}

void createAlias(u32 start, u32 end, u32 alias) {
  for (u32 i = start; i < end; i += 0x1000) {
    pageTable[alias / 0x1000 + (i - start) / 0x1000] = pageTable[i / 0x1000];
  }
}

void loadFile(const char* filename, void* mem, int fileOffset) {
  FILE *f = fopen(filename, "rb");
  if (f == NULL) {
    perror("Error opening file");
    exit(1);
  }

  fseek(f, 0, SEEK_END);
  long fsize = ftell(f);
  fseek(f, fileOffset, SEEK_SET);

  // TODO: Take away fileOffset?
  fread(mem, fsize, 1, f);
  // Swap all the 4-byte longwords
  for (int i = 0; i < fsize; i += 4) {
    u32* word = (u32*) (mem + i);
    *word = __builtin_bswap32(*word);
  }
  fclose(f);
}

uint32_t swap_endian(uint32_t value) {
    return ((value >> 24) & 0x000000FF) |
           ((value >> 8)  & 0x0000FF00) |
           ((value << 8)  & 0x00FF0000) |
           ((value << 24) & 0xFF000000);
}

void loadBinFile(const char *filename, void * hhk_ram) {
    FILE *file = fopen(filename, "rb");
    if (!file) {
        perror("Failed to open file");
        return;
    }

    // Default entry point
    long entry_point = 0x8cfe6000;

    // Seek to offset 0x0C to read the load address
    if (fseek(file, 0x0C, SEEK_SET) == 0) {
        uint32_t load_address;
        if (fread(&load_address, sizeof(uint32_t), 1, file) == 1) {
            // Check if the load address is within the valid range
            load_address = swap_endian(load_address);
            printf("Load address : %4x ...\n", load_address);

            if (load_address >= 0x8CFE2000 && load_address < 0x8CFFFFFF) {
                entry_point = load_address;
                printf("Entry point set to load address from file: 0x%08lx\n", entry_point);
            } else {
                printf("Load address out of valid range, using default entry point: 0x%08lx\n", entry_point);
            }
        } else {
            printf("Failed to read load address, using default entry point: 0x%08lx\n", entry_point);
        }
    } else {
        printf("Failed to seek in file, using default entry point: 0x%08lx\n", entry_point);
    }
    fclose(file);

    cpu.reg.PC = entry_point;

    loadFile(filename, hhk_ram + (entry_point - 0x8CFE2000), 0);
}

void initMemory(const char* filename) {
  // memory = calloc(0xffffffff, sizeof(u8));

  // Allocate a memory area at 0x80000000 (ROM)
  int romSize = (1024 * 1024 * (32 + 2));
  int g3aOffset = (1024 * 1024 * 32);
  int binOffset = 0x8CFF0000;
  // hhk system is 0x80000000 to 0x81500000
  void* rom = allocMemArea(0x80000000, 0x80000000 + romSize);
  // hhk bin are often loaded at 0x8CFF0000 but doom is at 0x8CFE2000
  void* hhk_ram = allocMemArea(0x8CFE2000, 0x8D000000);


  const char *ext = strrchr(filename, '.');
  if (ext && strcmp(ext, ".bin") == 0) {
    // Load .bin file
    printf("Loading bin file %s ...\n", filename);

    loadBinFile(filename, hhk_ram);
    // TODO: dynamic entry point
    // long entry_point = 0x8cfe6000;
    // loadFile(filename, hhk_ram + (entry_point - 0x8CFE2000), 0);
    // EntryPoint entryPoint = RunApp(g_numApps - 1);
    // if (entryPoint) {
    //     entryPoint();
    // }
  } else {
    // Load other file types, such as g3a
    loadFile(filename, rom + g3aOffset, 0x7000);
  }

  
  
  // Alias at 0xa0000000 (P2)
  createAlias(0x80000000, 0x80000000 + romSize, 0xa0000000);
  // Set up an alias at 0x00300000 in virtual memory to the file
  createAlias(0x80000000 + g3aOffset, 0x80000000 + romSize, 0x00300000);

  // TODO: set the product ID? Zeroing it out should be fine for now
  // We allocated with calloc so it's already zeroed out

  // Put a trapa instruction in the syscall handler
  // This isn't really used otherwise on the calculator,
  // so for now it's probably safe to hijack this instruction
  // writeMemory(0x80020070, 2, 0xc3ff); // trapa #255

  // Allocate an 8MB memory area at 0x8c000000 (RAM)
  void* ram = allocMemArea(0x8c000000, 0x8c000000 + (8 * 1024 * 1024));
  // Alias at 0xac000000 (P2)
  createAlias(0x8c000000, 0x8c000000 + (8 * 1024 * 1024), 0xac000000);
  // 512KB aliased to virtual memory at 0x08100000
  createAlias(0x8c160000, 0x8c160000 + (512 * 1024), 0x08100000);

  // 4KB of ILRAM at e5200000
  allocMemArea(0xe5200000, 0xe5200000 + 0x1000);

  // // 8KB XRAM at e5007000
  // allocMemArea(0xe5007000, 0xe5007000 + 0x2000);

  // 8KB XRAM at 0xe5000000 (loops)
  allocMemArea(0xe5000000, 0xe5000000 + 0x2000);
  for (int i = 1; i < 8; i++) {
    createAlias(0xe5000000, 0xe5000000 + 0x2000, 0xe5000000 + (0x2000 * i));
  }
  // 8KB YRAM at 0xe5010000 (loops)
  allocMemArea(0xe5010000, 0xe5010000 + 0x2000);
  for (int i = 1; i < 8; i++) {
    createAlias(0xe5010000, 0xe5010000 + 0x2000, 0xe5010000 + (0x2000 * i));
  }

  // 16KB RS memory at 0xfd800000
  void* rs = allocMemArea(0xfd800000, 0xfd800000 + 0x4000);

  // There is a 64k page at NULL
  // TODO: Make this read only and mapped to the right physical address
  // TODO: Have a way to catch null pointer errors for debugging
  allocMemArea(0, 0x10000);

  // typedef struct {
  // 	uint32_t SR;
  // 	uint32_t VBR;
  // 	uint32_t CPUOPM;
  // } cpu_state_t;
  // SR = 0x400001F0
  // VBR = 0x80020F00
  // CPUOPM = 00000300

  // TODO: Emulate the holes and banking
  // PRAM0
  allocMemArea(0xfe200000, 0xfe200000 + (160 * 1024));
  // XRAM0
  allocMemArea(0xfe240000, 0xfe240000 + (528 * 1024));
  // TODO: The rest
}

// Some ways of handling the endianness difference are described here:
// https://skmp.dev/blog/negative-addressing-bswap/
// Here we use the "XOR trick", because I'm not convinced that negative
// addressing is faster but I might need to test it

u32 readMemory(u32 address, u32 size) {
  // printf("Read address: %08x\n", address);

  // printf("Size: %d\n", size);
  // Check for unaligned access
  if (address % size != 0) {
    printf("Unaligned memory read at %08x, PC = %08x\n", address, cpu.reg.PC);
    // *((volatile u32* ) 1);
    
    #ifdef EMSCRIPTEN
    EM_ASM_({
      let event = new CustomEvent('cpu:crash', {
          detail: { name: 'UNALIGNED_MEMORY_READ', address: $0, pc: $1 }
      });
      document.dispatchEvent(event);
    }, address, cpu.reg.PC);
    emscripten_cancel_main_loop(); 
    #endif

    exit(1);
  }

  // Get the relevant page
  void* page = pageTable[address / 0x1000];

  // Check if the page is valid
  u32 value;
  if (page == NULL) {
    // It could be a special address
    // if (readSpecial(address, &value, size)) {
    //   // Shift and mask the value to simulate a read of the correct size
    //   if (size != 4) {
    //     value >>= (address % 4) * 8;
    //     value &= (1 << (size * 8)) - 1;
    //   }
    //   return value;
    // }

    if (readSpecial(address, size, &value)) {
      return value;
    }

    // TODO: Use the interrupt controller here?
    printf("Invalid memory read at %08x, PC = %08x\n", address, cpu.reg.PC);
    // exit(1);
    #ifdef IGNORE_INVALID_ACCESS
    if (address < 0x80000000) {
    #endif
    cpu.reg.TEA = address;
    raiseInterrupt(0x040, cpu.reg.VBR + 0x100, true);
    #ifdef IGNORE_INVALID_ACCESS
    }
    #endif
    return 0;
  }

  switch (size) {
    case 1:
      // xor the address with 3
      value = *(u8*)(page + ((address ^ 0x3) % 0x1000));
      break;
    case 2:
      // xor the address with 2
      value = *(u16*)(page + ((address ^ 0x2) % 0x1000));
      break;
    case 4:
      value = *(u32*)(page + (address % 0x1000));
      break;
    default:
      printf("Invalid memory read size: %d\n", size);
      exit(1);
  }

  return value;
}

#ifdef EMSCRIPTEN
EMSCRIPTEN_KEEPALIVE
#endif
u32 readMemory2Quick(u32 address) {
  // Get the relevant page
  void* page = pageTable[address / 0x1000];

  if (page == NULL) {
    return readMemory(address, 2);
  }

  return *(u16*)(page + ((address ^ 0x2) % 0x1000));
}

#ifdef EMSCRIPTEN
EMSCRIPTEN_KEEPALIVE
#endif
void writeMemory(u32 address, u32 size, u32 value) {
  // if (address >= 0x00300000 && address < 0x00500000) {
  //   printf("Write to ROM at %08x\n", cpu.reg.PC - 4);
  // }

  // printf("Address: %08x\n", address);

  // printf("Size: %d\n", size);
  // Check for unaligned access
  if (address % size != 0) {
    printf("Unaligned memory write at %08x\n", address);
    exit(1);
  }

  // Get the relevant page
  void* page = pageTable[address / 0x1000];

  // Check if the page is valid
  if (page == NULL) {
    // It could be a special address
    // if (address == 0xb4000000 && displayFastPath && size == 2) {
    //   fastWrite(value);
    //   return;
    // }
    if ((address & 0xff000000) == 0xb4000000) {
      dispInterfaceWrite(address, value, size);
      return;
    }

    // // Work out the bitmask used to select what bits to write
    // u32 mask;
    // if (size == 4) {
    //   mask = 0xffffffff;
    // } else {
    //   mask = (1 << (size * 8)) - 1;
    // }
    // // Shift the mask to the correct position
    // mask <<= (address % 4) * 8;
    // // Shift the value to the correct position
    // value <<= (address % 4) * 8;
    // if (writeSpecial(address, value, size, mask)) {
    //   return;
    // }

    if (writeSpecial(address, size, value)) {
      return;
    }

    printf("Invalid memory write at %08x, PC = %08x\n", address, cpu.reg.PC);
    // Scan the stack for things that look like addresses
    // This creates a very rough stack trace
    for (int i = 0; i < 0x800; i += 4) {
      u32 val = readMemory(cpu.reg.r15 + i, 4);
      if ((val >= 0x00300000 && val < 0x00500000) || (val >= 0x80000000 && val < 0x82000000)) {
        printf("Stack trace: %08x\n", val);
      }
    }
    // Also print a backtrace of the emulator C code
    // void* backtrace_buffer[100];
    // int backtrace_size = backtrace(backtrace_buffer, 100);
    // backtrace_symbols_fd(backtrace_buffer, backtrace_size, 2);

    // That didn't work like I wanted, just segfault so I can get a core dump
    // Let's dereference 0x1 (a null pointer could be optimized out)
    // *(u32*)0x1 = 0;
    exit(1);

    #ifdef IGNORE_INVALID_ACCESS
    if (address < 0x80000000) {
    #endif
    cpu.reg.TEA = address;
    raiseInterrupt(0x040, cpu.reg.VBR + 0x100, true);
    #ifdef IGNORE_INVALID_ACCESS
    }
    #endif
    // cpu.isSleeping = true;
    return;
  }

  switch (size) {
    case 1:
      // xor the address with 3
      *(u8*)(page + ((address ^ 0x3) % 0x1000)) = value;
      break;
    case 2:
      // xor the address with 2
      *(u16*)(page + ((address ^ 0x2) % 0x1000)) = value;
      break;
    case 4:
      *(u32*)(page + (address % 0x1000)) = value;
      break;
    default:
      printf("Invalid memory write size: %d\n", size);
      exit(1);
  }
}
