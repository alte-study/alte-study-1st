/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/7785
 * Problem Number: 7785
 * Level: Silver V
 * Algorithm: 자료 구조 / 해시를 사용한 집합과 맵
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

/* pseudocode
   1. 입력값의 공백을 기준으로 이름과 상태로 분리 (Baha enter => ['Baha', 'enter'])
   2-1. Object: 분리한 이름과 상태를 각각 키와 값으로 사용
   2-2. Set: 상태의 값에 따라 Set에 이름을 추가하거나 삭제
   3-1. Object: 값이 'enter'인 요소만 분리하여 배열 생성한 뒤 내림차순 출력
   3-2. Set: 전체 요소를 배열로 전환한 뒤 내림차순 출력
*/

/* Use Object */
const worker = {};

for (const info of input) {
  const [name, status] = info.split(' ');
  worker[name] = status;
}

const name = Object.keys(worker);
const entered = name.filter((key) => worker[key] === 'enter');

entered.sort().reverse();

console.log(entered.join('\n'));

/* Use Set */
const worker = new Set();

for (const info of input) {
  const [name, status] = info.split(' ');
  if (status === 'enter') {
    worker.add(name);
  } else worker.delete(name);
}

const entered = [...worker].sort().reverse();

console.log(entered.join('\n'));
