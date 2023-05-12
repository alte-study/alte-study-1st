/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 * Problem Number: 42746
 * Level: 2
 * Algorithm: 정렬
 */

/* pseudocode
   1. 배열 내 숫자를 문자열로 변경
   2. 마주한 두 문자열을 합쳤을 때 더 큰 수가 앞에 정렬되게 sort
      ([30, 34]가 있다면 3430이 3034보다 크기 때문에 [34, 30]으로 정렬되도록)
   3. 정렬된 배열을 합침
   4. 테스트케이스 11번의 반례를 위해 모든 문자열이 0인 경우 0으로 출력되게 처리
*/

function solution(numbers) {
  return numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('')[0] === '0'
    ? '0'
    : numbers
        .map(String)
        .sort((a, b) => b + a - (a + b))
        .join('');
}
