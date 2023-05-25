function solution(word) {
  const letters = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  return word
    .split("")
    .reduce(
      (acc, cur, i) => acc + (letters[cur] * (5 ** (5 - i) - 1)) / 4 + 1,
      0
    );
}
