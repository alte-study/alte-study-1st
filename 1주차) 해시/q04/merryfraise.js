/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * Problem Number: 42576
 * Level: 1
 * Algorithm: 해시
 */

/* pseudocode
   1. 참가자와 완주자에 해당하는 객체를 각각 만든다.
   2. 각 객체에 이미 있는 이름이라면 1명을 더 더해준다. (동명이인 처리)
   3. 참가자와 완주자 객체의 값이 동일하지 않은 경우 해당 키 값을 반환한다.
*/

function solution(participant, completion) {
  const part = {};
  const comp = {};

  for (const name of participant) {
    part[name] = (part[name] || 0) + 1;
  }

  for (const name of completion) {
    comp[name] = (comp[name] || 0) + 1;
  }

  for (let name in part) {
    if (part[name] !== comp[name]) return name;
  }
}
