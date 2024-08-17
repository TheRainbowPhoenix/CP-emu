import './app.css'
import App from './App.svelte'

window.Module = window.Module || {};

const app = new App({
  target: document.getElementById('app')!,
  props: {
    ide: false
  }
})

export default app
