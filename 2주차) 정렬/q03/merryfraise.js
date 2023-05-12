/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/18870
 * Problem Number: 18870
 * Level: Silver II
 * Algorithm: 정렬 / 값 / 좌표 압축
 */

const [N, input] = require('fs')
  .readFileSync('18870.txt')
  .toString()
  .trim()
  .split('\n');

/* pseudocode
   1. 기본 nums 배열과 정렬된 sorted 배열 준비
   2. sorted 배열의 요소를 Map에 작은 수부터 0부터 시작하는 인덱스 번호를 추가
   3. Map에 이미 있는 요소라면 추가하지 않고 없는 요소일 경우만 추가 + 인덱스 번호 증가
   4. 정렬되지 않은 nums 배열을 Map에 저장된 인덱스 번호로 매핑해서 출력
*/

const nums = input.split(' ').map(Number);
const sorted = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const index = new Map();
let idx = 0;

for (const el of sorted) {
  if (index.has(el)) continue;
  index.set(el, idx);
  idx++;
}

console.log(nums.map((el) => index.get(el)).join(' '));
