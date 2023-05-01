/**
 * Goorm
 * https://level.goorm.io
 * Problem Number: 175909
 * Level: 2
 * Algorithm: 해시
 */

const readline = require('readline');

/* pseudocode
   1. 첫번째 숫자는 모으려는 카드 종류의 수, 두번째 숫자는 주어지는 카드의 수
   2. 모인 카드의 종류가 모으고자 하는 종류보다 적다면 해시에 해당 번호의 카드를 추가
      (카드 종류를 중복해서 가질 수 있기 때문에 Set을 생성)
   3. 몇 번째 카드에서 모든 카드를 모을 수 있는지 묻기 때문에 전체 카드 수를 체크하기 위한 count 숫자를 올려줌
   4. 모든 종류의 카드가 모였다면 count를 출력하고 모으지 못했다면 -1을 출력
*/

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let lineN = 0;
  let info = [];
  const cards = new Set();
  let count = 0;

  for await (const line of rl) {
    if (lineN === 0) {
      info = line.split(' ');
    } else {
      if (cards.size < info[0]) {
        cards.add(line);
        count++;
      } else rl.close();
    }
    lineN++;
    if (lineN === info[1] + 1) {
      rl.close();
    }
  }

  cards.size < info[0] ? console.log(-1) : console.log(count);

  process.exit();
})();
