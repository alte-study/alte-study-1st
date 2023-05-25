const findContentChildren = function (g, s) {
  let answer = 0;
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  while (g.length) {
    if (g[g.length - 1] <= s[s.length - 1]) {
      g.pop();
      s.pop();
      answer++;
    } else {
      s.pop();
    }
    if (!s.length) {
      return answer;
    }
  }
  return answer;
};
