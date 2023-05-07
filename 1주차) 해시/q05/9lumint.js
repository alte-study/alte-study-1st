function solution(clothes) {
  let styling = {};
  let answer = 1;
  for (let i = 0; i < clothes.length; i++) {
    styling[clothes[i][1]] = (styling[clothes[i][1]] || 1) + 1;
  }
  for (let style in styling) {
    answer *= styling[style];
  }
  return answer - 1;
}
