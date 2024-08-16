document.addEventListener('cpu:dump', function(event) {
    console.log(`cpu:dump: INSTR ${event.detail.instr.toString(2).padStart(16, '0')} \t - PC: 0x${event.detail.pc.toString(16).padStart(8, '0')}`);
    console.log(event.detail.regs.map((r) => (r >>> 0).toString(16).toUpperCase()))
});

let auto_mode = true;

document.addEventListener('emu:main', function(event) {
    // document.querySelectorAll(".calc-button").forEach(e => e.style.border = "1px solid red")


    console.log('emu:main recv:', event.detail.state);
    // TODO: if Auto mode
    if (!auto_mode) {
        Module.ccall('setTrace', null, ['number'], [1]);
    }
    Module.ccall('startInterpreter', null, ["string"], ["Addin.g3a"]);
    // TOOD: else, manually load and run
    if (!auto_mode) {
        // Call this to resume : 
        // Module.ccall('runFrame', null, [], []);
        for (let it=0; it<10; it++) {
            Module.ccall('dumpOneFrame', null, [], [])
            Module.ccall('runOneFrame', null, ['number'], [1])
        }
        // Module.ccall('runOneFrame', null, ['number'], [1])
    }
});

/*
Module.onRuntimeInitialized = function() {
    // Call the C function using ccall
    Module.ccall('setTrace', null, ['number'], [1]);
    Module.ccall('runFrame', null, [], []);
};

*/