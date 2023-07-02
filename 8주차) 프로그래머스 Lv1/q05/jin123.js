function solution(s) {
  let first;
  let count = 0;
  let result = 0;
  s.split("").forEach((v) => {
    if (!count) {
      result++;
      first = v;
      count++;
    } else {
      first === v ? count++ : count--;
    }
  });
  return result;
}
