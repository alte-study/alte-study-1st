/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let index = 0;
  let helper = () => {
    let result = [];
    let repeat = [];
    while (index < s.length) {
      let char = s[index];
      index++;
      if (!Number.isNaN(+char)) {
        repeat.push(char);
      } else if (char === "[") {
        let str = helper();
        result.push(str.repeat(+repeat.join("")));
        repeat = [];
      } else if (char === "]") {
        return result.join("");
      } else {
        result.push(char);
      }
    }
    return result.join("");
  };
  return helper();
};
