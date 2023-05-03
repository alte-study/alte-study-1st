/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 34
 * Level: Medium
 * Algorithm: Array / Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* pseudocode
   0. 어떻게 풀어야 할 지 몰라서 solution 코드를 참고했습니다!
   1. target에 해당하는 요소의 시작 인덱스, 끝 인덱스를 찾는 함수 생성
   2. 시작 인덱스를 찾는 함수에서 target과 find가 일치할 경우
      그 앞에도 같은 요소가 존재하는지 확인하기 위해 end를 mid 앞으로 옮김
   3. 끝 인덱스를 찾는 함수에서 target과 find가 일치할 경우
      그 뒤에도 같은 요소가 존재하는지 확인하기 위해 start를 mid 뒤로 옮김
   4. 더이상 존재하지 않는다면 각 position을 리턴 (position에 해당하는 것이 없으면 -1 리턴)
   5. 각 함수의 실행 결과를 배열의 0, 1번째 인덱스에 할당한 뒤 리턴
*/

const findStart = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let startPosition = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let find = nums[mid];

    if (target === find) {
      startPosition = mid;
      end = mid - 1;
    } else if (target < find) end = mid - 1;
    else start = mid + 1;
  }

  return startPosition;
};

const findEnd = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let endPosition = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let find = nums[mid];

    if (target === find) {
      endPosition = mid;
      start = mid + 1;
    } else if (target < find) end = mid - 1;
    else start = mid + 1;
  }

  return endPosition;
};

var searchRange = function (nums, target) {
  return [findStart(nums, target), findEnd(nums, target)];
};
