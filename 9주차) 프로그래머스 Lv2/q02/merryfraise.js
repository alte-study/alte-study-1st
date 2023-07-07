/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 * Problem Number: 138476
 * Level: 2
 * Algorithm: 연습문제
 */

/* pseudocode
   1. 귤의 크기별로 개수를 센다.
   2. 크기별 귤을 내림차순으로 정렬한다.
   3. 가장 앞에서부터 귤의 개수를 제거하고 카운트를 1 증가한 뒤 다음 인덱스로 이동한다.
   4. 필요한 귤의 개수가 0 이하가 되면 반복문을 종료한다.
*/

function solution(k, tangerine) {
  const species = [];

  for (const el of tangerine) {
    const curValue = species[el];

    species[el] = curValue ? curValue + 1 : 1;
  }

  species.sort((a, b) => b - a);

  let amount = k;
  let idx = 0;
  let count = 0;

  while (amount > 0) {
    amount -= species[idx];
    count++;
    idx++;
  }

  return count;
}
