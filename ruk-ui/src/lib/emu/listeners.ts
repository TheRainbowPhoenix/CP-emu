import { state } from "../stores/app";


const emu_main = (e: any) => {
    console.log('emu:main recv:', e.detail.state);
}

export function setupListeners() {
    document.addEventListener('emu:main', emu_main);
    
    state.set("ready");

}