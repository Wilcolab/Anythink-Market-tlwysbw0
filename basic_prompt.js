// This file contains basic prompt-related functions or examples.

/**
 * Converts a string to camelCase.
 * Example: toCamelCase('hello world') returns 'helloWorld'
 * @param {string} str - The string to convert.
 * @returns {string} The camelCase version of the string.
 */
function toCamelCase(str) {
    return str
        .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]/, c => c.toLowerCase());
}