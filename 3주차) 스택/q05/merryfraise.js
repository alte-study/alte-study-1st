/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/10828
 * Problem Number: 10828
 * Level: Silver IV
 * Algorithm: 자료 구조 / 스택
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/* pseudocode
   1. 스택용 배열 생성 (stack)
   2. 명령어가 push인 경우 push와 함께 오는 정수를 배열에 push
   3. 명령어가 pop인 경우 pop한 정수를 출력 (단, 빈 배열이면 -1 출력)
   4. 명령어가 size인 경우 배열의 길이를 출력
   5. 명령어가 empty인 경우 빈 배열이면 1을, 빈 배열이 아니면 0을 출력
   6. 명령어가 top인 경우 가장 마지막 인덱스 요소를 출력 (단, 빈 배열이면 -1 출력)
   7. stack 배열에서만 출력을 처리하면 시간초과가 뜨기 때문에\
      요소를 출력해야하는 경우 result 배열에 따로 담아줌
*/

const stack = [];
const result = [];

for (const el of input) {
  if (el.includes('push')) {
    stack.push(el.split(' ')[1]);
  } else if (el.includes('pop')) {
    stack.length ? result.push(stack.pop()) : result.push(-1);
  } else if (el.includes('size')) {
    result.push(stack.length);
  } else if (el.includes('empty')) {
    stack.length ? result.push(0) : result.push(1);
  } else {
    stack.length ? result.push(stack[stack.length - 1]) : result.push(-1);
  }
}

console.log(result.join('\n'));
