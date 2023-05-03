/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 35
 * Level: Easy
 * Algorithm: Array / Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* pseudocode
   1. 중간값을 찾으려는 값으로 지정
   2. 중간값과 target이 일치하면 중간값 리턴
   3. 중간값이 target보다 작으면 start를 mid보다 크게 (중간값이 커져야함)
   4. 중간값이 target보다 크면 end를 mid보다 작게 (중간값이 작아져야함)
   5. 일치하는 값이 없다면 start를 리턴
      (([1, 3, 5, 6], 2)에서 결과가 1이고 ([1, 3, 5, 6], 7)에서 결과가 4인 것을 보면
      target보다 바로 작은 중간값의 인덱스에서 +1인 값임을 알 수 있음 (mid + 1 => start))
*/

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let find = nums[mid];

    if (target === find) return mid;
    else if (target > find) start = mid + 1;
    else end = mid - 1;
  }

  return start;
};
