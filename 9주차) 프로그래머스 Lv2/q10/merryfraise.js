/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/12941
 * Problem Number: 12941
 * Level: 2
 * Algorithm: 연습문제
 */

/* pseudocode
   0. 합의 최소 만들기 => A의 최솟값 * B의 최댓값 (또는 A의 최댓값 * B의 최솟값)
   1. A를 오름차순으로, B를 내림차순으로 정렬
   2. i번 인덱스의 값을 곱해서 더하면 각 배열의 최솟값 * 최댓값을 더해주는 꼴
   3. 배열의 길이만큼 A[i] * B[i] 반복
*/

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}
