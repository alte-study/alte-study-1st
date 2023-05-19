function solution(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? sum++ : sum--;
    if (sum < 0) {
      return false;
    }
  }
  return sum ? false : true;
};
