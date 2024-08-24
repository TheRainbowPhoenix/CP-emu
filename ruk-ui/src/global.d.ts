declare interface Window {
    Module: {
        ccall: (method: String, returns: any, types: String[], args: any[]) => void,
        cwrap: (method: String, returns: any, args: any[]) => (any?) => any,
        canvas: HTMLCanvasElement,
        FS: {
            analyzePath: (fileName: String) => {
                exists: boolean
            },
            readdir: (path: String) => string[],
            stat: (path: String) => {
                atime: Date, blksize: number, blocks: number, ctime: Date, dev: number, gid: number, ino: number, mode: number, mtime: Date, nlink: number, rdev: number, size: number, uid: number
            },
            isFile: (mode: number) => boolean,
            isDir: (mode: number) => boolean,
            isLink: (mode: number) => boolean,
            mkdir: (fileName: String) => boolean,
            mount: (fileName: String) => boolean,
            unlink:  (fileName: String) => boolean,
            createDataFile: (parent: string, fileName: string, data: any, canRead?: boolean, canWrite?: boolean, canOwn?: boolean) => void
        },
        requestFullscreen: (a: boolean, b: boolean) => void
    },
    sdk_call: (pc: number, pr: number, regArray: number[]) => number
}