function solution(survey, choices) {
  const result = [];
  const type = { A: 0, N: 0, J: 0, M: 0, C: 0, F: 0, R: 0, T: 0 };
  const typeValue = [, 3, 2, 1, 0, 1, 2, 3];
  choices.forEach((el, i) => {
    if (el === 4) return;
    type[el > 4 ? survey[i][1] : survey[i][0]] += typeValue[el];
  });
  result.push(type["R"] >= type["T"] ? "R" : "T");
  result.push(type["C"] >= type["F"] ? "C" : "F");
  result.push(type["J"] >= type["M"] ? "J" : "M");
  result.push(type["A"] >= type["N"] ? "A" : "N");
  return result.join("");
}
