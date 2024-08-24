
/**
 * @param {Blob} file
 * @param {string} fileName
 * @param {{ (error: any): void; (arg0: ProgressEvent<FileReader> | null): void; }} callback
 */
export function loadFileIntoFS(file, fileName, callback) {
    var reader = new FileReader();
    reader.onload = function(/** @type {any} */ e) {
        if (e.target && e.target.result) {
            var data = new Uint8Array(e.target.result);
  
            if (window.Module.FS.analyzePath(fileName).exists) {
                window.Module.FS.unlink(fileName);
            }
            window.Module.FS.createDataFile("/", fileName, data, true, true);
            console.log(`${fileName} loaded into the Emscripten filesystem.`);

            callback(null);
        } else {
            callback("target is empty");
        }
    };
    reader.onerror = function(error) {
        callback(error);
    };
    reader.readAsArrayBuffer(file);
}

/**
 * @param {any} file
 * @param {string} fileName
 */
export function loadFileIntoFSPromise(file, fileName) {
    return new Promise((resolve, reject) => {
        if (!fileName.startsWith("/fls0")) {
            fileName = `/fls0/${fileName}`
        }
        
        loadFileIntoFS(file, fileName, (/** @type {any} */ error) => {
            if (error) {
                reject(error);
            } else {
                resolve(() => {});
            }
        });
    });
}

/**
 * @param {RequestInfo | URL} filePath
 * @param {any} fileName
 */
export async function loadResourceIntoFS(filePath, fileName) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load file: ${filePath}`);
        }
        const data = new Uint8Array(await response.arrayBuffer());
        window.Module.FS.createDataFile('/', fileName, data, true, true, true);
        console.log(`${fileName} is now available in the Emscripten filesystem.`);
    } catch (/** @type {any} */ error) {
        console.error(error.message);
    }
}