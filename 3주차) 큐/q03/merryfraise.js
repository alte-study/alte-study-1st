/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1966
 * Problem Number: 1966
 * Level: Silver III
 * Algorithm: 구현 / 자료 구조 / 시뮬레이션 / 큐
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const test = input.map((el) => el.split(' ').map(Number));

/* pseudocode
   1. 현재 프린터 큐에 해당하는 배열 docs
   2. 탐색하고자 하는 문서의 인덱스 targetIdx
   3. 큐에서 뽑은 숫자가 가장 큰 수이고 탐색하고자 하는 문서와 일치하다면 result에 push하고 반복문 종료
   4. 큐에서 뽑은 숫자가 가장 큰 수이지만 탐색하고자 하는 문서와 다르면 count만 증가
   5. 큐에서 뽑은 숫자가 가장 큰 수가 아니라면 뽑은 숫자를 docs에 푸쉬하고
   6. targetIdx가 맨 앞에 있던 숫자였다면 마지막 인덱스로 변경
   7. targetIdx가 중간에 있던 숫자였다면 현재 인덱스에서 -1
*/

const result = [];

for (let i = 0; i < test.length; i += 2) {
  const docs = test[i + 1];
  let targetIdx = test[i][1];

  let count = 1;

  while (docs.length > 0) {
    const MAX_PRI = Math.max(...docs);
    const dequeue = docs.shift();

    if (dequeue === MAX_PRI) {
      if (targetIdx === 0) {
        result.push(count);
        break;
      }
      count++;
    } else {
      docs.push(dequeue);
    }

    if (!targetIdx) targetIdx = docs.length - 1;
    else targetIdx -= 1;
  }
}

console.log(result.join('\n'));
