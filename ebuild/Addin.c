#define FXCG50
#include <gint/display.h>
#include "gint/keycodes.h"
#include <gint/keyboard.h>
#include <gint/gint.h>
int main() {
    dclear(0x2104);
    dtext(1, 1, C_BLACK, "Sample fxSDK add-in.");
    dupdate();

    while (true) {
        dtext(1, 20, C_WHITE, "LOOP!"); 
        clearevents();
        if (keydown(KEY_MENU)) { 
            dtext(1, 40, C_WHITE, "EXIT!"); 
            gint_osmenu(); 
        }
        dupdate();
    }

    return 1;
}