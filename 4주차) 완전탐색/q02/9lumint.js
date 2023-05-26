function solution(answers) {
  let pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = pattern.map(
    (el) => answers.filter((e, i) => el[i % el.length] === e).length
  );
  return score
    .map((el, idx) => (el === Math.max(...score) ? idx + 1 : "-"))
    .filter((el) => el !== "-");
}
