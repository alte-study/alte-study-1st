/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/5585
 * Problem Number: 5585
 * Level: Bronze II
 * Algorithm: 그리디 알고리즘
 */

const PAY = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

/* pseudocode
   1. 잔돈은 1000에서 지불할 돈인 PAY를 뺀 값 (change)
   2. 잔돈이 500엔 이상이면 500엔을 지급
   3. 잔돈이 100엔 이상이면 100엔을 지급
   4. 잔돈이 50엔 이상이면 50엔을 지급
   5. 잔돈이 10엔 이상이면 10엔을 지급
   6. 잔돈이 5엔 이상이면 5엔을 지급
   7. 그 외는 1엔을 지급
   8. 조건문을 통과하면 count를 증가시킨다
   9. 잔돈이 0엔 남을 때까지 반복
*/

let change = 1000 - PAY;
let count = 0;

while (change) {
  if (change >= 500) {
    change -= 500;
  } else if (change >= 100) {
    change -= 100;
  } else if (change >= 50) {
    change -= 50;
  } else if (change >= 10) {
    change -= 10;
  } else if (change >= 5) {
    change -= 5;
  } else change -= 1;

  count++;
}

console.log(count);
