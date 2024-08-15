# casio-emu

A work-in-porgress emulator for the Casio CG50 calculator. It currently runs many add-ins created with [gint](https://gitea.planet-casio.com/Lephenixnoir/gint) quite well.

## Limitations
- This does not attempt to emulate syscalls or the OS yet, so PrizmSDK add-ins will not work
- Add-ins that use the USB driver will not boot
- The code is quite messy and inaccurate sometimes.

## Building

### For the web

```
C:\Path\To\EMScripten\emsdk\emsdk.bat activate latest
C:\Path\To\EMScripten\emsdk\emsdk_env.bat
mkdir -p ebuild  
cd ebuild
echo "copy the ebuild.zip content in the ebuild folder"
emcmake cmake .. -DUSE_SDL_GUI=ON -DEMSCRIPTEN=ON
emmake make -j4
```

### Locally 

This is not tested, but :

```
mkdir build
# If you want to build the SDL GUI rather than Qt one, add -DUSE_SDL_GUI=ON
# For the Emscripten build, use emcmake and emmake
cmake . -B build
make -C build
./build/calcemu [optional path to g3a]
```

## Screenshots

![image](https://github.com/user-attachments/assets/e7284885-cf0b-4e70-a952-61d248b514a7)

