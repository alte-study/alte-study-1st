/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/24090
 * Problem Number: 24090
 * Level: Silver V
 * Algorithm: 구현 / 정렬
 */

const [A, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, K] = A.split(' ').map(Number);
const nums = input.split(' ').map(Number);

/* pseudocode
   1. 문제에 작성된 의사코드대로 quick sort를 정의
   2. 요구하는 것은 K번째에 교환된 숫자를 작은 수부터 출력하는 것
   3. 교환 횟수 카운팅을 위한 변수 생성 (count)
   4. 교환된 숫자를 담기 위한 배열 생성 (result)
   5. count가 K와 동일하다면 배열에 작은 수부터 push (Math.min, Math.max 이용)
   6. 총 교환 횟수가 K보다 작다면 -1 출력 아니라면 result 출력
*/

let count = 0;
const result = [];

const quickSort = (nums, start, end) => {
  const partition = (nums, start, end) => {
    let pivot = nums[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
      if (nums[j] <= pivot) {
        i++;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        count++;

        if (count === K) {
          result.push(Math.min(nums[i], nums[j]), Math.max(nums[i], nums[j]));
        }
      }
    }

    if (i + 1 != end) {
      [nums[i + 1], nums[end]] = [nums[end], nums[i + 1]];
      count++;

      if (count === K) {
        result.push(Math.min(nums[i], nums[j]), Math.max(nums[i], nums[j]));
      }
    }

    return i + 1;
  };

  if (start < end) {
    let q = partition(nums, start, end);
    quickSort(nums, start, q - 1);
    quickSort(nums, q + 1, end);
  }

  return count < K ? -1 : result;
};

console.log(quickSort(nums, 0, N - 1));
