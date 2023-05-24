/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 * Problem Number: 42885
 * Level: 2
 * Algorithm: 완전탐색
 */

/* pseudocode
   1. 사람 몸무게 내림차순 정렬
   2. 가장 무거운 사람과 가장 가벼운 사람을 더했을 때 무게가 limit을 넘는다면,
      left만 증가 (혼자만 타게 되기 때문)
   3. 가장 무거운 사람과 가장 가벼운 사람을 더했을 때 무게가 limit을 넘지 않는다면,
      left는 증가하고 right는 감소 (두 사람이 타게 되기 때문)
   4. 사람을 태운 뒤에는 count 증가
*/

function solution(people, limit) {
  people.sort((a, b) => b - a);

  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] > limit) left++;
    else {
      left++;
      right--;
    }
    count++;
  }

  return count;
}
