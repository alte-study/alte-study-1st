/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1158
 * Problem Number: 1158
 * Level: Silver IV
 * Algorithm: 구현 / 자료 구조 / 큐
 */

const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

/* pseudocode
   1. 큐용 배열 생성 (queue)
   2. 인원수만큼 queue에 push
   3. 현재 사람은 queue.shift()를 한 사람
   4. 현재 사람이 K번째 사람이라면 (frquency % K가 0인지 여부로 판단) answer에 현재 사람 push
   5. K번째 사람이 아니라면 다시 queue에 해당 사람을 push
   6. 횟수를 증가시킴
*/

const queue = [];
const answer = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let frequency = 1;

while (queue.length > 0) {
  const dequeue = queue.shift();

  if (!(frequency % K)) answer.push(dequeue);
  else queue.push(dequeue);

  frequency++;
}

console.log(`<${answer.join(', ')}>`)
