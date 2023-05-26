/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42883
 * Problem Number: 42883
 * Level: 2
 * Algorithm: 탐욕법
 */

/* pseudocode
   1. result 배열에 있는 숫자들보다 현재 숫자가 크다면
      result에 있는 숫자를 빼고 k를 줄여준다. (작은 숫자를 제거했으므로)
   2. 그 외의 경우는 result에 현재 숫자를 push 해준다.
   3. 마지막에 slice 처리를 해주는 이유는 ('11', 1)과 같이 동일한 숫자가 들어올 경우
      pop처리 되는 숫자가 없어 결과가 '1'이 아니라 '11'이 되기 때문
*/

function solution(number, k) {
  const result = [];

  for (const el of number) {
    while (k > 0 && result[result.length - 1] < el) {
      result.pop();
      k--;
    }
    result.push(el);
  }

  return result.join('').slice(0, result.length - k);
}
