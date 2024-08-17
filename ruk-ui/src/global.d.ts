declare interface Window {
    Module: {
        ccall: (method: String, unk0: any, types: String[], args: String[]) => void,
        canvas: HTMLCanvasElement,
        FS: {
            analyzePath: (fileName: String) => {
                exists: boolean
            },
            unlink:  (fileName: String) => boolean,
            createDataFile: (parent: string, fileName: string, data: any, canRead?: boolean, canWrite?: boolean, canOwn?: boolean) => void
        },
        requestFullscreen: (a: boolean, b: boolean) => void
    };
}