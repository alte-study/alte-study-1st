/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * Problem Number: 77484
 * Level: 1
 * Algorithm: 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
 */

/* pseudocode
   1. lottos에서 일치하는 번호의 개수를 찾는다.
   2. lottos에 존재하는 0의 개수를 찾는다.
   3. 최고 등수는 lottos 일치하는 개수 + 0의 개수
   4. 최저 등수는 lottos 일치하는 개수
*/

function solution(lottos, win_nums) {
  let match = 0;
  let zero = 0;

  lottos.map((el) => {
    if (win_nums.includes(el)) match++;
    if (!el) zero++;
  });

  return [match + zero > 1 ? 7 - (match + zero) : 6, match > 1 ? 7 - match : 6];
}
