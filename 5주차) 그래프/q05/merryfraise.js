/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/9372
 * Problem Number: 9372
 * Level: Silver IV
 * Algorithm: 그래프 이론 / 트리
 */

const [T, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

/* pseudocode
   1. 모든 국가를 여행하기 위한 최소 경우의 수는 국가 수 - 1
      (다른 국가로 가기 위한 비행기를 한 번씩 타기 때문)
   2. 카운트 수가 0이라면 국가의 수와 비행기의 종류가 주어진다는 뜻이므로
      nation과 plane에 개수 각각 할당
   3. 비행기 종류 수와 현재 카운트 수가 일치하다면 결과 배열에 국가 수에서 1을 뺀 값을 push한 뒤
      count를 0으로 초기화 (다음 테스트 케이스를 측정하기 위해)
*/

const result = [];
let nation = 0;
let plane = 0;
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (!count) {
    nation = input[i][0];
    plane = input[i][1];
  } else {
    // 비행기 종류 수 === 현재 카운트 수
    if (plane === count) {
      result.push(nation - 1);
      count = 0;
      continue;
    }
  }
  count++;
}

console.log(result.join('\n'));
