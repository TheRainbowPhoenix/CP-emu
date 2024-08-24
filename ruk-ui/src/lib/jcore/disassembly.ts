import { format } from "../tools/fstrings";
import { abstract_table, opcodes_table } from "./generated_opcodes";

type ArgsDict = Record<string, number>;
type DisasmResult = [number | string, ArgsDict];

const opcodesTable = opcodes_table;
const abstractTable = abstract_table;

export default class Disassembler {
    debug: boolean;

    constructor(debug: boolean = false) {
        this.debug = debug;
    }

    disasm(op: number, traceOnly: boolean = false): DisasmResult {
        for (const opcodeStruct of opcodesTable) {
            const [opId, fmt, mask, code, argsStruct] = opcodeStruct;
            const args: ArgsDict = {};

            if ((op & mask) === code) {
                for (const argName in argsStruct) {
                    const argMask = argsStruct[argName];

                    if ((argMask & 0b1111_1111) === 0) {
                        args[argName] = (op & argMask) >> 8;
                        continue;
                    }

                    if ((argMask & 0b1111_0000_1111) === 0) {
                        args[argName] = (op & argMask) >> 4;
                        continue;
                    }

                    if ((argMask & 0b1111_0000_0000) === 0) {
                        args[argName] = op & argMask;
                        continue;
                    }

                    if ((argMask & 0b1111_0000_0000_0000) === 0) {
                        args[argName] = op & argMask;
                        continue;
                    }

                    if ((argMask & 0b1111_1111_0000) === 0) {
                        args[argName] = op & argMask;
                        continue;
                    }

                    if ((argMask & 0b1111_1000_1111) === 0) {
                        args[argName] = op & argMask;
                        continue;
                    }
                }

                if (traceOnly) {
                    return [fmt, args];
                }

                const fmtArgs = { ...args };
                if ("d" in fmtArgs) {
                    fmtArgs["d"] *= 4;
                }

                console.log(fmt.replace(/{(\w+)}/g, (_, key) => fmtArgs[key].toString()));

                if (this.debug) {
                    const abstractEntry = abstractTable[opId];
                    if (abstractEntry) {
                        console.log(format(abstractEntry, fmtArgs))
                        // console.log(abstractEntry.replace(/{(\w+)}/g, (_, key) => fmtArgs[key].toString()));
                    }
                }

                return [opId, args];
            }
        }
        if (traceOnly) {
            return [`.word 0x{w:08x}`, {
                w: ((op & 0xF000) << 12) | ((op & 0x0F00) << 8) | ((op & 0x00f0) << 4) | (op & 0x000f)
            } ]
        }
        throw new Error(`Unknown OPCode : ${op.toString(16).toUpperCase()}`);
    }
}
