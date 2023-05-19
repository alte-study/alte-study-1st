const removeDuplicates = function (s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.slice(-1)[0] !== s[i] ? answer.push(s[i]) : answer.pop();
  }
  return answer.join("");
};
