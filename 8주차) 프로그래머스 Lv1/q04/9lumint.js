function solution(survey, choices) {
  const point = {},
    standard = ["RT", "CF", "JM", "AN"],
    result = ["R", "C", "J", "A"];
  for (let i = 0; i < survey.length; i++) {
    let pointKey = choices[i] >= 4 ? survey[i][1] : survey[i][0];
    point[pointKey] = (point[pointKey] || 0) + Math.abs(choices[i] - 4);
  }
  for (let i = 0; i < standard.length; i++) {
    if (point[standard[i][1]] > (point[standard[i][0]] || 0)) {
      result[i] = standard[i][1];
    }
  }
  return result.join("");
}
