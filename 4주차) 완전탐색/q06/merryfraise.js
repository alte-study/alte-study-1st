/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/4673
 * Problem Number: 4673
 * Level: Silver V
 * Algorithm: 수학 / 구현 / 브루트포스 알고리즘
 */

/* pseudocode
   1. 셀프 넘버가 아닌 수를 찾는 함수 findNotSelfNumber
      자기 자신 + 자리수 별 숫자를 모두 더한 값은 셀프 넘버가 아님
   2. 1부터 10000까지 숫자를 가진 해시 nums
   3. notSelfNums에 1부터 10000까지 숫자를 대입하며 셀프 넘버가 아닌 숫자를 push
   4. nums에서 notSelfNums에 해당하는 숫자들을 삭제하고 출력
*/

const findNotSelfNumber = (num) => {
  const numSplit = String(num).split('');
  let notSelfNumber = num;

  for (const el of numSplit) {
    notSelfNumber += +el;
  }

  return notSelfNumber;
};

const nums = new Set(Array.from({ length: 10000 }, (_, i) => i + 1));
const notSelfNums = [];

for (let i = 1; i <= 10000; i++) {
  notSelfNums.push(findNotSelfNumber(i));
}

for (const el of notSelfNums) {
  nums.delete(el);
}

console.log([...nums].join('\n'));
