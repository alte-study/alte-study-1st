/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * Problem Number: 42578
 * Level: 2
 * Algorithm: 해시
 */

/* pseudocode
   1. 각 종류 당 입을 수 있는 가지수는 (종류 별 옷 개수 + 안 입는 경우)
   2. 종류를 키로, 가지수를 값으로 가진 해시 테이블 생성
   3. 전체 가지수는 (종류별 가지수를 전부 곱한 값 - 아무것도 안 입는 경우)
*/

function solution(clothes) {
  const cloth = new Map();
  let result = 1;

  for (const species of clothes) {
    cloth.has(species[1])
      ? cloth.set(species[1], cloth.get(species[1]) + 1)
      : cloth.set(species[1], 2);
  }

  for (const count of cloth.values()) {
    result *= count;
  }

  return result - 1;
}
