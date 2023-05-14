/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 75
 * Level: Medium
 * Algorithm: Array / Two Pointers / Sorting
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* pseudocode
   0-1. in-place란? 추가적인 메모리가 들지 않는 것
   0-2. in-place 정렬 3대장 : bubble sort, selection sort, insertion sort
   1. insertion sort로 선택
   2. 앞 요소와 비교해서 앞 요소가 더 크면 현재 요소와 교환
   3. 아무것도 반환하지 말라고 했기 때문에 return은 없음
*/

var sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];

    for (let j = i - 1; j > -1 && nums[j] > temp; j--) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
};
