#include "sdk.h"
#include <fcntl.h>  // for open flags
#include <unistd.h> // for close
#include <stdio.h>  // for printf

int sdk_open(const char *path, int flags) {
    // TODO: the path ptr is wrong - should be 0x8CFE607A but getting 0x8CFE6010 ... maybe add a check there of the ptr value ? 
    printf("sdk_open(*'%4x', %4x)\n", path, flags);
    int fd = open(path, flags);
    if (fd == -1) {
        printf("SDK: Failed to open file: %s\n", path);
    } else {
        printf("SDK: File opened successfully: %s (fd = %d)\n", path, fd);
    }
    return fd;
}
