/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681
 * Problem Number: 17681
 * Level: 1
 * Algorithm: 2018 KAKAO BLIND RECRUITMENT
 */

/* pseudocode
   1. 숫자 배열을 이진수로 매핑한다.
   2. 이진수로 변환한 지도 배열 2개를 비교하며 그 중 하나라도 1이라면 '#'을 push한다.
   3. 그 외에는 ' '을 push한다.
   4. 결과 배열을 리턴한다.
*/

function solution(n, arr1, arr2) {
  const map1 = arr1.map((el) => el.toString(2).padStart(n, '0'));
  const map2 = arr2.map((el) => el.toString(2).padStart(n, '0'));
  const result = Array(n)
    .fill()
    .map((_) => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (+map1[i][j] || +map2[i][j]) result[i].push('#');
      else result[i].push(' ');
    }
  }

  return result.map((el) => el.join(''));
}
