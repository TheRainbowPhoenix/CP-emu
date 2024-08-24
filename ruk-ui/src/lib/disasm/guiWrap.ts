export function getOpColor(op: string): string {
    if (op.startsWith("mov")) {
        return "mov";
    } else if (op === "nop") {
        return "nop";
    } else if (["bf", "bra", "bt", "bf.s", "bt.s", "jmp"].includes(op)) {
        return "jmp";
    } else if (op === "rts") {
        return "ret";
    } else if (op.startsWith("cmp")) {
        return "cmp";
    } else if (op.startsWith("bsr")) {
        return "call";
    } else if (op.startsWith("add") || op.startsWith("mul") || op.startsWith("mac") || op.startsWith("neg") || op.startsWith("sub") || op.startsWith("not")) {
        return "math"; // Instead of returning "math, just return "math"
    } else if (op.startsWith(".")) {
        return "trap";
    }

    return ""; // Default case
}

export function colorizeAsm(asm: string): string {
    return (asm
            .replace(/(0x[0-9a-fA-F]+)/g, '<span class="num">$1</span>')
            .replace(/[(),+]/g, char => `<span class="math">${char}</span>`)
    )
}