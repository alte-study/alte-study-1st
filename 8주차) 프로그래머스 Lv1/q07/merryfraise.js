/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * Problem Number: 76501
 * Level: 1
 * Algorithm: 월간 코드 챌린지 시즌2
 */

/* pseudocode
   1. signs가 true라면 양수를 더하고 false라면 음수를 더한다.
   2. 더한 값을 반환한다.
*/

function solution(absolutes, signs) {
  let result = 0;

  absolutes.map((el, idx) => {
    result += signs[idx] ? el : -el;
  });

  return result;
}
