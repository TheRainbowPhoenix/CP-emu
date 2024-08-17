<script lang="ts">
  import { onMount } from 'svelte';
  import RuKLogo from './assets/RuK.svg'
  import Background from './assets/background.svelte'
  
  import { dropEmulator } from './lib/emu/loader.js';
  import Buttons from './lib/emu/buttons.svelte';
  import Calculator from './lib/emu/calculator.svelte';
  import Emscripten from './lib/emu/emscripten.svelte';
  import Toolbar from './lib/ui/toolbar.svelte';
  import { autorun, copyScreenFeedback, debugging, loadedFilename, state, traceback } from './lib/stores/app';
  import { loadFileIntoFSPromise } from './lib/emu/fetchers';
  import { get } from 'svelte/store';
  import CalculatorSkin from './assets/calculatorSkin.svelte';
  import { setupListeners } from './lib/emu/listeners';

  onMount(async () => {
    setupListeners();

    state.subscribe((s) => {
      console.log(s)
    })

    dropEmulator();
  })

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
    // TODO 
  }

  const doDebug = (e: CustomEvent) => {
    debugging.set(true);

    // TODO 
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
        // loaded_filename = null;
        loadFileIntoFSPromise(file, file.name).then(() => {
            console.log(file.name)
            loadedFilename.set(file.name);

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

    <div class="logo">
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
  
    <Toolbar
      on:romChanged={doRomLoad}
      on:doRun={doRun}
      on:doDump={doDump}
      on:doDebug={doDebug}
      on:doFullscreen={doFullscreen}
      on:doCopyScreen={doCopyScreen}
      on:doSaveScreen={doSaveScreen}
    />
    <div style="display: none;">
      <Emscripten />
    </div>

  </div>


  

</main>

<style>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
  }

  .logo {
    display: flex;
    position: absolute;
    top: 2rem;
    left: 2rem;
    align-items: center;
  }

  .logo img {
    height: 4em;
    margin-right: 1rem;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo span {
    display: block;
    font-size: 2em;
    font-weight: bold;
  }

  .calc-container {
    position: relative;
  }

  #classpad {
    width: 432px;
  }
 
</style>
