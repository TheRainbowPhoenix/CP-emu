import { state, traceback } from "../stores/app";


const emu_main = (e: any) => {
    console.log('emu:main recv:', e.detail.state);
}
const cpu_crash = (e: any) => {
    console.error('cpu_crash recv:', e.detail);
    state.set("crashed");

    let name = e.detail.name
    let address = (e.detail.address >>> 0).toString(16).padStart(8, '0')
    let pc = (e.detail.pc >>> 0).toString(16).padStart(8, '0')

    traceback.set({
        name: name,
        message: `@ 0x${address} \t\n PC:${pc}\n`
    })
}

const cpu_dump = (e: any) => {
    console.error('cpu_dump recv:', e.detail);
    console.log(`cpu:dump: INSTR ${e.detail.instr.toString(16).padStart(4, '0')} \t - PC: 0x${(e.detail.pc >>> 0).toString(16).padStart(8, '0')}`);
    console.log(e.detail.regs.map((r: number) => (r >>> 0).toString(16).toUpperCase()))
}


export function setupListeners() {
    document.addEventListener('emu:main', emu_main);
    document.addEventListener('cpu:dump', cpu_dump);
    document.addEventListener('cpu:crash', cpu_crash);
}