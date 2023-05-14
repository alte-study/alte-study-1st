/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10989
 * Problem Number: 10989
 * Level: Bronze I
 * Algorithm: 정렬
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

/* pseudocode
   1. counting sort 이용
   2. 배열에 요소가 몇개씩 있는지 세기 위한 count 배열 생성
   3. 해당 요소의 인덱스 번호에 개수를 추가
   4. 결과 배열에 count 배열을 재 배열 (빈 인덱스를 없애기 위해)
   5. result를 한 줄씩 결과로 출력
   6. 메모리 부족
*/

const count = [];
const result = [];

for (const el of input) {
  count[el] = (count[el] || 0) + 1;
}

for (let i = 0; i < count.length; i++) {
  while (count[i] > 0) {
    result.push(i);
    count[i]--;
  }
}

console.log(result.join('\n'));
