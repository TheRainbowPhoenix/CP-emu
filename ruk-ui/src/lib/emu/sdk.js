window.sdk_call = (pc, regArray) => {
    let pc_str = (pc >>> 0).toString(16).padStart(8, '0');
    console.log(`[SDK.JS] - (slow SysCall emulator) - GOT PC: ${pc_str}. Check it here: https://github.com/search?q=repo%3AClasspadDev%2Fhollyhock-3+${pc_str}&type=code`)
    console.debug("-- Registers : ")
    console.debug(regArray.map((r) => (r >>> 0).toString(16).toUpperCase()))

    let pc_val = pc >>> 0;
    
    debugger;

    if (sdk_map[pc_val] != null) {
        return sdk_map[pc_val](pc, regArray);
    } else {
        debugger;
    }

    return (pc >>> 0);
}

/**
 * 
 * @param {number} pc 
 * @param {number[]} regArray 
 * @returns 
 */
const sdk_open = (pc, regArray) => {
    // TODO: implement open here
    return regArray[4]; // r4
}

/** @type {Record<number, any>} */
const sdk_map = {
    80057854: sdk_open
}

