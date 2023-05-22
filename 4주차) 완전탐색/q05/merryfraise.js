/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 * Problem Number: 86491
 * Level: 1
 * Algorithm: 완전탐색
 */

/* pseudocode
   1. sizes의 배열을 순회하면서 긴 길이를 가로, 짧은 길이를 세로로 변경
   2. Math.max로 가장 긴 가로 길이와 가장 긴 세로 길이를 구함
   3. 둘을 곱한 값을 반환
*/

function solution(sizes) {
  let MAX_WIDTH = 0;
  let MAX_HEIGHT = 0;

  for (const el of sizes) {
    if (el[0] < el[1]) {
      [el[0], el[1]] = [el[1], el[0]];
    }

    MAX_WIDTH = Math.max(MAX_WIDTH, el[0]);
    MAX_HEIGHT = Math.max(MAX_HEIGHT, el[1]);
  }

  return MAX_WIDTH * MAX_HEIGHT;
}
