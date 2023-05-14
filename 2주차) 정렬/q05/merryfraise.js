/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * Problem Number: 42748
 * Level: 1
 * Algorithm: 정렬
 */

/* pseudocode
   1. commands를 순회하면서
   2. array를 commands[0] - 1부터 commands[1]까지 slice를 한 뒤
   3. slice한 배열을 오름차순으로 정렬하고
   4. 정렬한 배열의 commands[2]번째 숫자를 sliced 배열에 push한 뒤 sliced를 리턴한다.
*/

function solution(array, commands) {
  const sliced = [];

  commands.forEach((el) => {
    sliced.push(array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]);
  });

  return sliced;
}
