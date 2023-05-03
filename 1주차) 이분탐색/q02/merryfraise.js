/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 744
 * Level: Easy
 * Algorithm: Array / Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* pseudocode
   1. target이 find보다 작으면 end 범위를 좁힘
   2. target이 find보다 크거나 같으면 start 범위를 좁힘 (중복 요소 고려)
   3. target이 마지막 요소보다 크거나 같으면 첫번째 요소를 리턴하고
   4. 아니라면 start 인덱스의 요소를 리턴 (현재 위치의 다음 요소)
*/

var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let find = letters[mid];

    if (target < find) end = mid - 1;
    else start = mid + 1;
  }

  return target >= letters[letters.length - 1] ? letters[0] : letters[start];
};
