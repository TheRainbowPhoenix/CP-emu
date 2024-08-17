let auto_mode = true;
let loaded_filename = false;

/* Global helpers */

function pickFile() {
    document.getElementById('fileInput').click();
}

function handleFile(event) {
    var file = event.target.files[0];
    if (file) {
        var temporaryName = "LoadedAddin.g3a";
    }
}

function generateTemporaryName() {
    var array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return btoa(String.fromCharCode.apply(null, array)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function do_bsod(error) {
    console.error(error);

    const canvas = document.getElementById('canvas');

    let existingBsod = document.getElementById('bsod');
    if (existingBsod) {
        existingBsod.remove();
    }

    const bsod = document.createElement('div');
    bsod.id = 'bsod';

    // Set the size and position of the BSOD div to match the canvas
    bsod.style.position = 'absolute';
    bsod.style.width = canvas.width + 'px';
    bsod.style.height = canvas.height + 'px';
    bsod.style.left = canvas.offsetLeft + 'px';
    bsod.style.top = canvas.offsetTop + 'px';
    bsod.style.padding = '24px';
    bsod.style.boxSizing = 'border-box';

    bsod.style.backgroundColor = '#0000AA';
    bsod.style.color = 'white';
    bsod.style.fontFamily = '"Lucida Console", monospace';
    bsod.style.whiteSpace = 'pre-wrap';
    bsod.style.overflowWrap = 'break-word';

    // Set the error message
    bsod.innerText = `${error.name}\n\n${error.message}`;

    // Show the BSOD div
    bsod.style.display = 'block';
    canvas.parentNode.insertBefore(bsod, canvas.nextSibling);
}

function debug_step() {
    try {
        Module.ccall('dumpOneFrame', null, [], [])
        Module.ccall('runOneFrame', null, ['number'], [1])

        return true;
    } catch (error) {
        do_bsod(error);
        return false;
    }
}

/* Events handlers */

document.getElementById("btn_fullscreen").addEventListener("click", function() {
    Module.requestFullscreen(true, false);
})

document.getElementById("btn_pickFile").addEventListener("click", function() {
    // TODO
})
document.getElementById("btn_copyScreen").addEventListener("click", function() {
    const canvas = document.getElementById('canvas');
    canvas.toBlob(function(blob) {
      const item = new ClipboardItem({ 'image/png': blob });
      navigator.clipboard.write([item]);
    });
})
document.getElementById("btn_saveScreen").addEventListener("click", function() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'ClassPad_Screen.png';
    link.click();
})

document.getElementById("btn_debug").addEventListener("click", function() {
    if (!trace_mode) {
        trace_mode = 1;
        Module.ccall('setTrace', null, ['number'], [trace_mode]);
    }

    if (loaded_filename) {
        let existingBsod = document.getElementById('bsod');
        if (existingBsod) {
            existingBsod.remove();
        }

        Module.ccall('startInterpreter', null, ["string"], [loaded_filename]);
        loaded_filename = null;

        for (let it=0; it<10; it++) {
            if(!debug_step()) break;
        }
    }

    console.log("TODO: btn_debug")
})

let trace_mode = 0;

document.getElementById("btn_dump").addEventListener("click", function() {
    trace_mode = (!trace_mode & 1);

    Module.ccall('setTrace', null, ['number'], [trace_mode]);
    console.log("TODO: btn_dump")
})

document.getElementById("btn_run").addEventListener("click", function() {
    if (loaded_filename) {
        let existingBsod = document.getElementById('bsod');
        if (existingBsod) {
            existingBsod.remove();
        }

        try {
            Module.ccall('startInterpreter', null, ["string"], [loaded_filename]);
        } catch (error) {
            do_bsod(error);
        }
        loaded_filename = null;
    }
    console.log("TODO: btn_run")
})

document.addEventListener('cpu:dump', function(event) {
    console.log(`cpu:dump: INSTR ${event.detail.instr.toString(16).padStart(4, '0')} \t - PC: 0x${(event.detail.pc >>> 0).toString(16).padStart(8, '0')}`);
    console.log(event.detail.regs.map((r) => (r >>> 0).toString(16).toUpperCase()))
});

document.addEventListener('cpu:crash', function(event) {
    console.log(event);
    
    let name = event.detail.name
    let address = (event.detail.address >>> 0).toString(16).padStart(8, '0')
    let pc = (event.detail.pc >>> 0).toString(16).padStart(8, '0')
    do_bsod({
        name: name,
        message: `@ 0x${address} \t\n PC:${pc}\n`
    })
    console.log(event.detail.regs.map((r) => (r >>> 0).toString(16).toUpperCase()))
});


document.addEventListener('emu:main', function(event) {
    // document.querySelectorAll(".calc-button").forEach(e => e.style.border = "1px solid red")


    console.log('emu:main recv:', event.detail.state);
    // TODO: if Auto mode
    // if (!auto_mode) {
    //     Module.ccall('setTrace', null, ['number'], [1]);
    // }

    return;
    // TODO: this is managed by using the "pick a file" button

    let addinName = 'MyAddin-fx.g3a' // "SampleAddin.g3a" / ...
    loadResourceIntoFS(`/${addinName}`, addinName).then(() => {
        console.log("File loaded_filename !")

        Module.ccall('startInterpreter', null, ["string"], [addinName]);
        // TOOD: else, manually load and run
        // runNow();
    })
    
});

/*
Module.onRuntimeInitialized = function() {
    // Call the C function using ccall
    Module.ccall('setTrace', null, ['number'], [1]);
    Module.ccall('runFrame', null, [], []);
};

*/

function loadFileIntoFS(file, fileName, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
  
        if (Module.FS.analyzePath(fileName).exists) {
            Module.FS.unlink(fileName);
        }
        Module.FS.createDataFile("/", fileName, data, true, true);
        console.log(`${fileName} loaded_filename into the Emscripten filesystem.`);
        callback(null);
    };
    reader.onerror = function(error) {
        callback(error);
    };
    reader.readAsArrayBuffer(file);
}

function loadFileIntoFSPromise(file, fileName) {
    return new Promise((resolve, reject) => {
        loadFileIntoFS(file, fileName, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

async function loadResourceIntoFS(filePath, fileName) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load file: ${filePath}`);
        }
        const data = new Uint8Array(await response.arrayBuffer());
        Module.FS.createDataFile('/', fileName, data, true, true, true);
        console.log(`${fileName} is now available in the Emscripten filesystem.`);
    } catch (error) {
        console.error(error.message);
    }
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        loaded_filename = null;
        loadFileIntoFSPromise(file, file.name).then(() => {
            console.log(file.name)
            loaded_filename = file.name;
            // Module.ccall('startInterpreter', null, ["string"], [file.name]);
            // runNow();
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
    }
});