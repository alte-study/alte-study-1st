/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/14501
 * Problem Number: 14501
 * Level: Silver III
 * Algorithm: 다이나믹 프로그래밍 / 브루트포스 알고리즘
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));

/* pseudocode
   0. https://kau-algorithm.tistory.com/800
   1. 퇴사 이후까지 상담이 지속되면 패스
   2. 이미 생긴 수익 + 해당일 상담을 진행했을 경우 얻는 수익을 저장
   3. 해당일과 다른 상담을 진행할 경우 얻는 수익을 2번의 값과 비교하여 더 큰 값 저장
*/

const memo = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  if (i + input[i][0] > N) continue;

  memo[i] += input[i][1];

  for (let j = i + input[i][0]; j < N; j++) {
    memo[j] = Math.max(memo[j], memo[i]);
  }
}

console.log(Math.max(...memo));
