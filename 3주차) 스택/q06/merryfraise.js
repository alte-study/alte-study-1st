/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10773
 * Problem Number: 10773
 * Level: Silver IV
 * Algorithm: 구현 / 자료 구조 / 스택
 */

const [K, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

/* pseudocode
   1. 스택용 배열 생성 (stack)
   2. 총 합계용 변수 생성 (sum)
   3. 입력값이 0이라면 stack에서 숫자를 pop하고 아니라면 stack에 입력값을 push
   4. stack에 담긴 모든 숫자를 sum에 더함
*/

const stack = [];
let sum = 0;

for (const el of input) {
  el ? stack.push(el) : stack.pop();
}

for (const el of stack) {
  sum += el;
}

console.log(sum);
