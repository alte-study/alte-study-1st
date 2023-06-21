/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/9095
 * Problem Number: 9095
 * Level: Silver III
 * Algorithm: 다이나믹 프로그래밍
 */

const [T, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

/* pseudocode
   1. 1, 2, 3에서 1, 2, 3으로만 합을 만들어낼 수 있는 가짓수 저장
      1-1. 1 => 1 (1개)
      1-2. 2 => 1 + 1, 2 (2개)
      1-3. 3 => 1 + 1 + 1, 1 + 2, 2 + 1, 3 (4개)
   2. N이 4일 때
      2-1. 1 + 3
      2-2. 1 + 1 + 2, 2 + 2
      2-3. 1 + 1 + 1 + 1, 1 + 2 + 1, 2 + 1 + 1, 3 + 1
      2-4. 총 7가지는 곧 1의 경우의 수 + 2의 경우의 수 + 3의 경우의 수
   3. 따라서 memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
*/

const result = [];

const memo = [0, 1, 2, 4];

for (let i = 4; i <= Math.max(...input); i++) {
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
}

for (const el of input) result.push(memo[el]);

console.log(result.join('\n'));
