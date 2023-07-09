function solution(s) {
  const newS = s.slice(2, -2);
  const result = new Set();
  const tupleSet = newS.split("},{").map((el) => {
    return el.split(",");
  });
  tupleSet.sort((a, b) => a.length - b.length);
  tupleSet.forEach((el) => el.forEach((el2) => result.add(+el2)));
  return [...result];
}
