<script lang="ts">
  import { onMount } from 'svelte';
  import RuKLogo from './assets/RuK.svg'
  import Background from './assets/background.svelte'
  
  import { dropEmulator } from './lib/emu/loader.js';
  import Buttons from './lib/emu/buttons.svelte';
  import Calculator from './lib/emu/calculator.svelte';
  import Emscripten from './lib/emu/emscripten.svelte';
  import Toolbar from './lib/ui/toolbar.svelte';
  import { loadedFilename, state } from './lib/stores/app';
  import { loadFileIntoFSPromise } from './lib/emu/fetchers';
  import { get } from 'svelte/store';
  import CalculatorSkin from './assets/calculatorSkin.svelte';

  onMount(async () => {
    dropEmulator();
  })

  const doRomLoad = async (e: CustomEvent) => {
    console.log(e.detail);
    state.set("loading");

    var file = e.detail.target.files[0];
    if (file) {
        // loaded_filename = null;
        loadFileIntoFSPromise(file, file.name).then(() => {
            console.log(file.name)
            loadedFilename.set(file.name);

            // loaded_filename = file.name;
            let fileName = get(loadedFilename);
            if (fileName) {
              window.Module.ccall('startInterpreter', null, ["string"], [fileName]);
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
  
    <Toolbar on:romChanged={doRomLoad} />
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
