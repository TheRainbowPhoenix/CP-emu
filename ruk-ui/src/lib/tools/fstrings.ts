type FormatDict = { [key: string]: number };

export function format(template: string|number, values: FormatDict): string {
    return `${template}`.replace(/\{(\w+):(\w+)\}/g, (match, key, formatSpecifier) => {
        const value = values[key];
        if (value === undefined) {
            throw new Error(`Key '${key}' not found in provided values.`);
        }

        switch (formatSpecifier) {
            case 'd':
                return value.toString();
            case '02x':
                return value.toString(16).padStart(2, '0');
            case '04x':
                return value.toString(16).padStart(4, '0');
            case '08x':
                return value.toString(16).padStart(8, '0');
            default:
                throw new Error(`Unsupported format specifier '${formatSpecifier}'`);
        }
    });
}