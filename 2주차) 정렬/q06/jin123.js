function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return +answer[0] ? answer : "0";
}
