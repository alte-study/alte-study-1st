/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  [...strs.map((el) => el.split("").sort().join("")).entries()]
    .sort((a, b) => a[1].localeCompare(b[1]))
    .forEach((el, i, arr) => {
      if (arr[i - 1]?.[1] === el[1]) {
        result[result.length - 1].push(strs[el[0]]);
      } else {
        result.push([strs[el[0]]]);
      }
    });
  return result;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  strs
    .map((el) => el.split("").sort().join(""))
    .forEach((el, i) => {
      map.get(el) ? map.get(el).push(strs[i]) : map.set(el, [strs[i]]);
    });
  return [...map.values()];
};
