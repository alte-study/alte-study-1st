/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let uniqueChars = new Map();
  let repeatedChars = new Set();
  for (let i = 0; i < s.length; i++) {
    if (uniqueChars.has(s[i])) {
      uniqueChars.delete(s[i]);
      repeatedChars.add(s[i]);
    } else if (!repeatedChars.has(s[i])) {
      uniqueChars.set(s[i], i);
    }
  }
  return uniqueChars.values().next().value ?? -1;
};
