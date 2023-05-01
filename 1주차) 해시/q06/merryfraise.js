/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/17219
 * Problem Number: 17219
 * Level: Silver IV
 * Algorithm: 자료 구조 / 해시를 사용한 집합과 맵
 */

const [A, ...B] = require('fs')
  .readFileSync('17219.txt')
  .toString()
  .trim()
  .split('\n');

/* pseudocode
   1. 첫번째 숫자는 저장된 사이트 주소의 수, 두번째 숫자는 찾으려는 사이트의 수
   2. 입력된 숫자를 이용해 저장된 사이트와 찾으려는 사이트로 분리
   3. 저장된 사이트에 해당하는 해시용 Map 생성
   4. 해시에서 찾으려는 사이트를 골라 추출
*/

const [N, M] = A.split(' ').map(Number);

const store = [];
const find = [];

for (let i = 0; i < N + M; i++) {
  i < N ? store.push(B[i].split(' ')) : find.push(B[i]);
}

const stored = new Map();
const result = [];

for (const sites of store) {
  stored.set(sites[0], sites[1]);
}

for (const sites of find) {
  result.push(stored.get(sites));
}

console.log(result.join('\n'));
