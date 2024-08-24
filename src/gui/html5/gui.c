#include <emscripten.h>

#include <stdbool.h>
#include <stdio.h>

#include "../../int.h"
#include "../../interpreter.h"
#include "../../hardware/keyboard/keyboard.h"
#include "../skin/default/skin.h"

#define RGB(r,g,b) ((((r) >> 1) << 11) | ((g) << 5) | ((b) >> 1))

typedef uint16_t color_t;

#define LCD_WIDTH_PX 320 // 396
#define LCD_HEIGHT_PX 528 // 224


int trace = 0;

EMSCRIPTEN_KEEPALIVE
void setTrace(int mode) {
  trace = mode;
  printf("Mode trace changed to %d \n", mode);
}

EM_JS(void, setupEventListener, (), {
  document.addEventListener('cpu::setTrace', function(event) {
    Module.setTrace(event.detail.mode);
  });
});

int main(int argc, char* argv[]) {
  int i = 0;
  while (buttons[i].id != 0) {
    EM_ASM_({
      let button = document.createElement("button");
      button.className = "calc-button";
      button.style.left = $0 + "px";
      button.style.top = $1 + "px";
      button.style.width = $2 + "px";
      button.style.height = $3 + "px";
      button.onpointerdown = () => {
        setKeydown($4, true);
      };
      button.onpointerup = () => {
        setKeydown($4, false);
      };
      document.getElementById("buttons").appendChild(button);
    }, buttons[i].x, buttons[i].y, buttons[i].w, buttons[i].h, buttons[i].id);
    i++;
  }
  emscripten_set_canvas_size(LCD_WIDTH_PX, LCD_HEIGHT_PX);
  EM_ASM_({
    window.canvasContext = Module['canvas'].getContext('2d');
    window.canvasImageData = canvasContext.getImageData(0, 0, 320, 528);
  });

  EM_ASM(
    FS.mkdir('/fls0');
  );
  EM_ASM(
    FS.mount(MEMFS, { root: '/fls0' }, '/fls0');
  );

 
  EM_ASM_({
    let event = new CustomEvent('emu:main', {
        detail: { state: "ready" }
    });
    document.dispatchEvent(event); 
  });


  // startInterpreter("Addin.g3a");
}

void Copy_ToCanvas(uint32_t* ptr) {
  EM_ASM_({
    let data = Module.HEAPU8.slice($0, $0 + 320 * 528 * 4);
    canvasImageData.data.set(data);
    canvasContext.putImageData(canvasImageData, 0, 0);
  }, ptr);
}

void displayUpdateBox(u16* vram, int x, int y, int w, int h) {
  static unsigned int screencopy[LCD_WIDTH_PX * LCD_HEIGHT_PX];
  for (int yPos = y; yPos < y + h; yPos++) {
    for (int xPos = x; xPos < x + w; xPos++) {
      int c = vram[yPos * LCD_WIDTH_PX + xPos];
      // https://gist.github.com/companje/11deb82e807f2cf927b3a0da1646e795#file-rgb565-pde-L8
      unsigned char r = (unsigned char)(((c & 0xF800) >> 11) << 3);
      unsigned char g = (unsigned char)(((c & 0x7E0) >> 5) << 2);
      unsigned char b = (unsigned char)(((c & 0x1F)) << 3);
      unsigned int argb = 0xff000000 | ((int)b << 16) | ((int)g << 8) | (int)r;
      screencopy[yPos * LCD_WIDTH_PX + xPos] = argb;
    }
  }
  Copy_ToCanvas(screencopy);
}


void updateDisplay(u16* vram) {
  displayUpdateBox(vram, 0, 0, LCD_WIDTH_PX, LCD_HEIGHT_PX);
}

void handleEvents(void) {

}

#define FPS 60
// #define MS_PER_FRAME (1000 / FPS)

void runMainLoop(void (*callback)(void)) {
  EM_ASM_({
    console.log("runMainLoop");
  });

  // Cancel any existing main loop
  emscripten_cancel_main_loop(); 

  if (trace) {
    // TODO: if called in "step" mode, manually step

  } else {
    // if called in "run" :
    emscripten_set_main_loop(callback, FPS, false);

    // fall off main: either keep running or exit with code.
    // emscripten_exit_with_live_runtime();
    // emscripten_force_exit(0);
  }
}
