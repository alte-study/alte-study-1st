function solution(x) {
  let newX = (x + "").split("").reduce((acc, cur) => acc + +cur, 0);
  return x % newX === 0;
}
