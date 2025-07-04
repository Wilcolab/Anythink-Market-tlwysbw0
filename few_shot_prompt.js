// This file will contain few-shot prompt examples or related functions.

function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'