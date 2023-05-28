/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/11399
 * Problem Number: 11399
 * Level: Silver IV
 * Algorithm: 그리디 알고리즘 / 정렬
 */

const [N, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const P = input.split(' ').map(Number);

/* pseudocode
   1. P를 오름차순 정렬한다
      (오름차순 정렬 하는 이유는 가장 적은 숫자가 가장 많은 횟수 더해지게 하기 위해.
       P의 가장 앞에 있는 숫자는 P의 길이만큼 덧셈이 반복된다.)
   2. P[i]를 이전 요소인 P[i-1]와 더한다.
   3. sum에 P[i]를 더한다.
*/

P.sort((a, b) => a - b);

let sum = P[0];

for (let i = 1; i < P.length; i++) {
  P[i] += P[i - 1];
  sum += P[i];
}

console.log(sum);
