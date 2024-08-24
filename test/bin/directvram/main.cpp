#include <appdef.hpp>
#include <sdk/os/debug.hpp>
#include <sdk/os/input.hpp>
#include <sdk/os/lcd.hpp>

APP_NAME("TouchRectangle")
APP_DESCRIPTION("Move a rectangle based on touch and key input.")
APP_AUTHOR("Your Name")
APP_VERSION("1.0.0")

#define COLOR_BACKGROUND RGB_TO_RGB565(0, 0, 0)
#define COLOR_RECTANGLE RGB_TO_RGB565(0x1F, 0, 0)

#define RECT_SIZE 20
#define MOVE_STEP 5

extern unsigned int *vram;
int lcdWidth, lcdHeight;
int rectX, rectY;

void drawRectangle(int x, int y, uint16_t color) {
  for (int i = x; i < x + RECT_SIZE; ++i) {
    for (int j = y; j < y + RECT_SIZE; ++j) {
      if (i >= 0 && i < lcdWidth && j >= 0 && j < lcdHeight) {
        vram[i + (j + 24) * lcdWidth] = color;
      }
    }
  }
}

void draw() { drawRectangle(rectX, rectY, COLOR_RECTANGLE); }

void main() {
  *vram = 0xb4000000;
  lcdWidth = 320;
  lcdHeight = 528;

  rectX = lcdWidth / 2 - RECT_SIZE / 2;
  rectY = lcdHeight / 2 - RECT_SIZE / 2;

  asm volatile(".rept 8\n\t" // Repeat the following instruction 8 times
               "nop\n\t"
               ".endr\n\t");

  vram = (unsigned int *)LCD_GetVRAMAddress();
  asm volatile(".rept 8\n\t" // Repeat the following instruction 8 times
               "nop\n\t"
               ".endr\n\t");
  LCD_Refresh();
  asm volatile(".rept 8\n\t" // Repeat the following instruction 8 times
               "nop\n\t"
               ".endr\n\t");
  LCD_VRAMBackup();
  asm volatile(".rept 8\n\t" // Repeat the following instruction 8 times
               "nop\n\t"
               ".endr\n\t");
}
