/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 1
 * Level: Easy
 * Algorithm: Array / Hash Table
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* pseudocode
   0. Array 이용한 것은 과거에 풀어봤던 것 (시간복잡도 O(N^2))
   1. nums를 저장하기 위한 해시 생성 (key를 요소, value를 인덱스로 저장하기 위해 Map 사용)
   2. target과 현재 숫자의 차이(find)가 nums 안에 존재한다면 현재 숫자의 해시 value와 find의 인덱스 번호 출력
*/

/* Use Array */
var twoSum = function (nums, target) {
  const arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr[0] = i;
        arr[1] = j;
      }
    }
  }
  return arr;
};

/* Use Map */
var twoSum = function (nums, target) {
  const number = new Map();

  for (let i = 0; i < nums.length; i++) {
    const find = target - nums[i];

    if (number.get(find) !== undefined) return [number.get(find), i];

    number.set(nums[i], i);
  }
};
