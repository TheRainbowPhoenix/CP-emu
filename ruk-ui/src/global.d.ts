declare interface Window {
    Module: {
        ccall: (method: String, returns: any, types: String[], args: any[]) => void,
        cwrap: (method: String, returns: any, args: any[]) => (any?) => any,
        canvas: HTMLCanvasElement,
        FS: {
            analyzePath: (fileName: String) => {
                exists: boolean
            },
            unlink:  (fileName: String) => boolean,
            createDataFile: (parent: string, fileName: string, data: any, canRead?: boolean, canWrite?: boolean, canOwn?: boolean) => void
        },
        requestFullscreen: (a: boolean, b: boolean) => void
    },
    sdk_call: (pc: number, regArray: number[]) => number
}