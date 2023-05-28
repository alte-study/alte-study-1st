/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 74
 * Level: Medium
 * Algorithm: Array / Binary Search / Matrix
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/* pseudocode
   1. target의 범위와 맞는 matrix 내의 배열을 찾는다.
   2. targetLine에 해당하는 배열에서 이분탐색을 시행한다.
      (time complexity를 O(log(m * n))을 만족해야만 한다고 적혀있기 때문)
   3. target이 배열 내에 존재하면 true를 리턴한다.
   4. 이분탐색을 해도 일치하는 항목이 없다면 false를 리턴한다.
*/

var searchMatrix = function (matrix, target) {
  let targetLine = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (target <= matrix[i][matrix[i].length - 1]) {
      targetLine = i;
      break;
    }
  }

  let left = 0;
  let right = matrix[targetLine].length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < matrix[targetLine][mid]) {
      right = mid - 1;
    } else if (target > matrix[targetLine][mid]) {
      left = mid + 1;
    } else return true;
  }

  return false;
};
