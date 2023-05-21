/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/12873
 * Problem Number: 12873
 * Level: Silver IV
 * Algorithm: 구현 / 자료 구조 / 시뮬레이션 / 큐
 */

let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

/* pseudocode
   1. t^3번째 해당하는 사람이 지워지는 것은 곧
      t^3 % N번째 해당하는 사람이 지워지는 것과 같음
   2. 1번 사람은 무조건 기념품을 받을 수 없으므로 제외
   3. frequency는 현재 회차 (2회차부터 시작)
   4. count는 현재 회차의 호명된 숫자
   5. count가 나머지와 동일하다면 현재 dequeue된 사람 제외하고 다음 회차 시작
   6. 나머지가 0이라면 가장 마지막 사람이 제외되어야 하므로 pop
   7. 그 외는 dequeue된 사람을 queue 끝에 넣어주고 count 증가
*/

if (N === 1) console.log(1);
else {
  const queue = [];

  for (let i = 2; i <= N; i++) {
    queue.push(i);
  }

  N -= 1;

  let frequency = 2;
  let count = 1;

  while (queue.length > 1) {
    const dequeue = queue.shift();

    if (count === frequency ** 3 % N) {
      frequency++;
      count = 1;
      N -= 1;
    } else if (frequency ** 3 % N === 0) {
      queue.unshift(dequeue);
      queue.pop();
      frequency++;
      count = 1;
      N -= 1;
    } else {
      queue.push(dequeue);
      count++;
    }
  }

  console.log(queue[0]);
}
