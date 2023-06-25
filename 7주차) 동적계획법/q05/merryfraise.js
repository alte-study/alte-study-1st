/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1003
 * Problem Number: 1003
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
   1. [0 카운트 횟수, 1 카운트 횟수]
      1-1. N이 0이면 [1, 0]
      1-2. N이 1이면 [0, 1]
      1-3. N이 2 이상인 경우 이전의 두 카운트 수의 합 [1 + 0, 0 + 1]
   2. N까지 N - 1, N - 2의 카운트를 계속 더해준다
*/

const result = [];

const fibonacci = (N) => {
  const fiboCount = [
    [1, 0],
    [0, 1],
  ];

  for (let i = 2; i <= N; i++) {
    fiboCount[i] = [
      fiboCount[i - 1][0] + fiboCount[i - 2][0],
      fiboCount[i - 1][1] + fiboCount[i - 2][1],
    ];
  }

  return fiboCount[N].join(' ');
};

for (const el of input) {
  result.push(fibonacci(el));
}

console.log(result.join('\n'));
