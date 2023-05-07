/**
 * Goorm
 * https://level.goorm.io
 * Problem Number: 49060
 * Level: 2
 * Algorithm: 이진 탐색
 */

const readline = require('readline');

/* pseudocode
   0. 첫번째 숫자는 개미의 수, 두번째 숫자는 개미 사이 최대 거리
   1. 입력되는 값을 오름차순으로 정렬한다.
   2. 최대 거리를 만족하지 않는 최소한의 개미를 죽여야하기 때문에
      맨 앞의 개미부터의 개미수, 맨 뒤의 개미부터의 개미수를 따로 측정하여 최소값을 비교한다.
   3. 측정을 위한 함수를 2개 만들어 각자 이진 탐색을 실행한다.
*/

const findFromStart = (ants, count, distance) => {
  let start = 0;
  let end = ants.length - 1;
  let length = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (ants[mid] - ants[0] <= distance) {
      length = mid + 1;
      start = mid + 1;
    } else end = mid - 1;
  }
  return count - length;
};

const findFromEnd = (ants, count, distance) => {
  let start = 0;
  let end = ants.length - 1;
  let length = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (ants[ants.length - 1] - ants[mid] <= distance) {
      length = ants.length - mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return count - length;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N;
  let D;
  let count = 0;

  for await (const line of rl) {
    if (count === 0) {
      N = line.split(' ').map(Number)[0];
      D = line.split(' ').map(Number)[1];
    }
    if (++count === 2) {
      rl.close();

      const ants = line
        .split(' ')
        .map(Number)
        .sort((a, b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });

      console.log(Math.min(findFromStart(ants, N, D), findFromEnd(ants, N, D)));
    }
  }

  process.exit();
})();
