<script lang="ts">
  import { onMount } from 'svelte';
  import RuKLogo from './assets/RuK.svg'
  import Background from './assets/background.svelte'
  
  import { dropEmulator } from './lib/emu/loader.js';
  import Buttons from './lib/emu/buttons.svelte';
  import Calculator from './lib/emu/calculator.svelte';
  import Emscripten from './lib/emu/emscripten.svelte';
  import Toolbar from './lib/elements/toolbar.svelte';
  import Tracing from './lib/elements/tracing.svelte';
  import { autorun, copyScreenFeedback, debugging, debugPane, filesPane, lastDump, loadedFilename, state, traceback, tracing } from './lib/stores/app';
  import { loadFileIntoFSPromise } from './lib/emu/fetchers';
  import { get } from 'svelte/store';
  import CalculatorSkin from './assets/calculatorSkin.svelte';
  import { setupListeners } from './lib/emu/listeners';
  import Debug from './lib/elements/debug.svelte';
  import Files from './lib/elements/files.svelte';

  onMount(async () => {
    setupListeners();

    state.subscribe((s) => {
      console.log(s)
    })

    dropEmulator();
  })

  const doBrowseFiles = (e: CustomEvent) => {
    filesPane.set(!$filesPane);
  }

  const doFullscreen = (e: CustomEvent) => {
    window.Module.requestFullscreen(true, false);
  }

  const doCopyScreen = (e: CustomEvent) => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
      canvas.toBlob(function(blob: any) {
        const item = new ClipboardItem({ 'image/png': blob });
        navigator.clipboard.write([item]).then(() => {
          copyScreenFeedback.set("Copied to clipboard !");

          setTimeout(() => {
            copyScreenFeedback.set(null);
          }, 4000);

        }).catch(() => {

        })
      });
    }
  }

  const doSaveScreen = (e: CustomEvent) => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'ClassPad_Screen.png';
      link.click();
    }
  }

  const doDump = (e: CustomEvent) => {
    if (!$tracing) {
      // Show the UI
      tracing.set(true);
      // Call a one-time dump to show registers state
      lastDump.set(null);
      window.Module.ccall('dumpOneFrame', null, [], [])
    }
    // TODO 
  }

  const doRefresh = (e: CustomEvent) => {
    console.log("doRefresh !!");
    if (!$tracing) {
      // Show the UI
      tracing.set(true);
    }
    
    lastDump.set(null);
    window.Module.ccall('dumpOneFrame', null, [], []);
  };

  const doDebug = (e: CustomEvent) => {
    if ($state === "loaded" || $state === "ready") {
      debugging.set(true);
      window.Module.ccall('setTrace', null, ['number'], [1]);
      doRun(e);  
    }

    if (!$debugPane) {
      debugPane.set(true);
    }
  }
  

  const doRun = async (e: CustomEvent) => {
    let fileName = get(loadedFilename);
    if (fileName) {
      state.set("running");
      try {
        window.Module.ccall('startInterpreter', null, ["string"], [fileName]);
      } catch (error) {
        traceback.set(error)
        state.set("crashed")
      }
    } else {
      state.set("crashed");
      traceback.set({
        name: "INVALID_FILE_NAME",
        message: `fileName is empty`
      })
    }
  }

  const doRomLoad = async (e: CustomEvent) => {
    console.log(e.detail);
    state.set("loading");

    var file = e.detail.target.files[0];
    if (file) {
      // window.Module.FS.mkdir('/fls0');
      // window.Module.FS.mount(MEMFS, { root: '/fls0' }, '/fls0');
      let fileName = `/fls0/${file.name}`

        // loaded_filename = null;
        loadFileIntoFSPromise(file, fileName).then(() => {
            console.log(fileName)
            loadedFilename.set(fileName);

            if ($autorun) {
              doRun(e);
            } else {
              state.set("loaded");
            }
            // runNow();
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
    }
  }

  export let ide = true;
</script>

<main>
  <Background />

  <div class="container">

    <div class="logo" class:compact={$debugPane}>
      <img src={RuKLogo} alt="RuK Logo" />
      <span>RuK UI</span>
    </div>

    <div class="calc-container">
      <div id="classpad" style="--zoomFactor: 1.5">
        <CalculatorSkin />
      </div>
      <Calculator />
      <Buttons />
    </div>
  
    <!-- <div class="tools-container"> -->
      <Toolbar
        on:romChanged={doRomLoad}
        on:doBrowseFiles={doBrowseFiles}
        on:doRun={doRun}
        on:doDump={doDump}
        on:doDebug={doDebug}
        on:doFullscreen={doFullscreen}
        on:doCopyScreen={doCopyScreen}
        on:doSaveScreen={doSaveScreen}
      />

      <Debug />

      <div class="small-widgets">
        <Tracing
          on:doRefresh={doRefresh}
        />
        <Files
          on:doSendFile={() => {}}
          on:doNewFolder={() => {}}
        />
      </div>
    <!-- </div> -->
    <div style="display: none;">
      <Emscripten />
    </div>

  </div>


  

</main>

<style>

  .container {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: .5rem;

    flex-direction: row;
    align-items: flex-start;
    min-height: 960px;
    gap: .75rem;
    flex-shrink: 1;
    visibility: visible;
    position: relative;
    overflow: hidden;
    font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace;
    font-weight: normal;
    color: var(--cp-text);
    min-height: 960px;
  }

  .logo {
    display: flex;
    position: absolute;
    top: 2rem;
    left: 2rem;
    align-items: center;
    z-index: 120;
  }

  .logo.compact {
    top: .5rem;
    left: .5rem;
    align-items: center;
  }

  .logo img {
    height: 4em;
    margin-right: 1rem;
    will-change: filter;
    transition: filter 300ms, height .25s ease-in;
  }

  .logo.compact img {
    height: 3em;
    margin-right: 0rem;
    transition: height .25s ease-in;
  }

  .logo span {
    opacity: 1;
    display: block;
    font-size: 2em;
    font-weight: bold;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
    transition: clip-path .25s ease-in, opacity .3s ease-in;
  }

  .logo.compact span {
    opacity: 0;
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
    transition: clip-path .25s ease-in, opacity .3s ease-in;

  }

  .calc-container {
    flex: 0 0 440px;
    position: relative;
  }

  #classpad {
    width: 432px;
  }

  .tools-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    min-height: 960px;
    gap: .75rem;
    padding-left: 1.5rem;
    flex-shrink: 1;
   
    visibility: visible;
    position: relative;
    overflow: hidden;
    font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo,
      Consolas, "DejaVu Sans Mono", monospace;
    font-weight: normal;
    color: var(--cp-text);
    min-height: 960px;
  }

  .small-widgets {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    min-height: 960px;
    gap: .75rem;
    flex-shrink: 1;
    overflow: hidden;
    justify-content: flex-start;
  }
 
</style>
