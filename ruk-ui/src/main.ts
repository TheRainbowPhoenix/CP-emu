import './app.css'
import './lunar-ui.css'
import App from './App.svelte'

import './lib/emu/sdk.js'

window.Module = window.Module || {};

const app = new App({
  target: document.getElementById('app')!,
  props: {
    ide: false
  }
})

export default app
