// Refined prompt for robust camelCase conversion
/**
 * Converts any string into camelCase.
 * - Removes non-alphanumeric characters (like dashes, underscores, and symbols).
 * - Converts all words after the first one to start with an uppercase letter.
 * - Handles edge cases like empty strings, multiple spaces, mixed delimiters (e.g., - _   and strings in all caps or all lowercase).
 * - Returns an empty string if the input is null, undefined, or not a string.
 * - Throws an error if the input is not a string.
 *
 * Examples:
 *   toCamelCase("first name") → "firstName"
 *   toCamelCase("user_id") → "userId"
 *   toCamelCase("SCREEN_NAME") → "screenName"
 *   toCamelCase("  mobile-number  ") → "mobileNumber"
 *   toCamelCase(null) → ""
 *   toCamelCase(123) → throws "Input must be a string"
 */
function toCamelCase(input) {
  if (input === null || input === undefined || input === '') return '';
  if (typeof input !== 'string') throw new Error('Input must be a string');
  let str = input.replace(/[^a-zA-Z0-9]+/g, ' ');
  const words = str.trim().split(/\s+/);
  if (words.length === 0 || (words.length === 1 && words[0] === '')) return '';
  return words
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (i === 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}
