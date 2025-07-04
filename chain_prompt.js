// This file is for chain prompt examples or related functions.

function toKebabCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') throw new Error('Input must be a string');
    let str = input.trim().toLowerCase();
    str = str.replace(/[^a-z0-9]+/g, '-');
    str = str.replace(/^-+|-+$/g, '');
    str = str.replace(/-+/g, '-');
    return str;
}