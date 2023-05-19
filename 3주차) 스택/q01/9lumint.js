const isValid = function (s) {
  let arr = [s[0]],
    bracket = ["()", "[]", "{}"],
    error = ["(]", "(}", "[)", "[}", "{)", "{]"];
  for (let i = 1; i < s.length; i++) {
    if (bracket.indexOf(arr[arr.length - 1] + s[i]) !== -1) {
      arr.pop();
    } else if (error.indexOf(arr[arr.length - 1] + s[i]) !== -1) {
      return false;
    } else {
      arr.push(s[i]);
    }
  }
  return arr.length === 0 ? true : false;
};
