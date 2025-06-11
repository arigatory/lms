/**
 * Russian Case Helper
 * Provides correct noun declension based on number (1-20+)
 * 
 * Usage:
 *   russianCase(number, wordForms)
 * 
 * wordForms should be an array of 3 forms:
 *   [nominative singular, genitive singular, genitive plural]
 * 
 * Example:
 *   russianCase(5, ['модуль', 'модуля', 'модулей']) → "модулей"
 */

function russianCase(number, wordForms) {
  if (!wordForms || wordForms.length !== 3) {
    throw new Error('wordForms must be an array of 3 forms: [nominative singular, genitive singular, genitive plural]');
  }

  const absNumber = Math.abs(number);
  const lastTwo = absNumber % 100;
  const lastDigit = absNumber % 10;

  // Cases for numbers ending in 1 (except 11)
  if (lastDigit === 1 && lastTwo !== 11) {
    return wordForms[0]; // nominative singular
  }

  // Cases for numbers ending in 2-4 (except 12-14)
  if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) {
    return wordForms[1]; // genitive singular
  }

  // All other cases
  return wordForms[2]; // genitive plural
}

/**
 * Shortcut function for common case when you need to show number + word
 * Example: numberWithRussianCase(5, ['модуль', 'модуля', 'модулей']) → "5 модулей"
 */
function numberWithRussianCase(number, wordForms) {
  return `${number} ${russianCase(number, wordForms)}`;
}

module.exports = {
  russianCase,
  numberWithRussianCase
};