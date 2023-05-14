/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 912
 * Level: Medium
 * Algorithm: Array / Divide and Conquer / Sorting / Heap (Priority Queue) / Merge Sort / Bucket Sort / Radix Sort / Counting Sort
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* pseudocode
   1. merge sort
   1-1. 배열을 길이가 2이하가 될 때까지 반으로 나눈다.
   1-2. 배열에 있는 2개의 요소의 크기를 비교하여 작은 순서대로 push한다.
   1-3. 반복
   
   2. bucket sort
   2-1. js 예제가 없어서 더 찾아보는 중
   
   3. radix sort
   3-1. 배열의 최대값의 자리수를 구한다. (maxDigit 함수)
   3-2. 한 자리수부터 최대 자리수까지 반복하는 요소가 빈 배열로 이루어진 bucket을 만든다.
   3-3. 자리수만큼 숫자를 나누면서 정렬을 수행
   3-4. 현재 짠 코드는 음수 처리를 하지 못함
   
   4. counting sort
   4-1. 카운팅을 위한 배열 생성 (counting)
   4-2. 음수 처리를 위해 최소값의 절대값만큼 배열에 추가해줌
   4-3. 각 숫자에 해당하는 counting 인덱스에 숫자 개수를 추가
   4-4. counting의 각 요소가 0보다 클때까지 해당 인덱스를 sorted 배열에 추가하고, 개수를 1개씩 줄인다.
   4-5. sorted 배열은 음수가 있을 경우 음수 처리를 한 상태이기 때문에 다시 추가한 만큼 빼줌 
*/

/* Use Merge Sort */
const merge = (left, right) => {
  let leftIdx = 0;
  let rightIdx = 0;
  const sorted = [];

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      sorted.push(left[leftIdx]);
      leftIdx++;
    } else {
      sorted.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return sorted.concat(left.slice(leftIdx), right.slice(rightIdx));
};

var mergeSortArray = function (nums) {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);

  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  return merge(mergeSortArray(left), mergeSortArray(right));
};

/* Use Bucket Sort ❌ */
var bucketSortArray = function (nums) {
  const bucket = [];

  for (let i = 0; i < nums.length; i++) {
    bucket[i] = [];
  }

  nums.forEach((el) => {
    const index = Math.floor(el / 10);
    bucket[index].push(el);
  });

  for (let i = 0; i < nums.length; i++) {
    bucket[i] = bucket[i].sort((a, b) => a - b);
  }

  let numsIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < bucket.length; j++) {
      nums[numsIdx] = bucket[i][j];
      numsIdx++;
    }
  }

  return nums;
};

/* Use Radix Sort ❌ */
const maxDigit = (nums) => {
  let maxDig = 0;

  nums.forEach((el) => (maxDig = Math.max(maxDig, String(el).length)));

  return maxDig;
};

var radixSortArray = function (nums) {
  const maxDig = maxDigit(nums);

  for (let i = 0; i < maxDig; i++) {
    let bucket = new Array(10).fill(0).map((_) => []);

    for (let j = 0; j < nums.length; j++) {
      let digit = Math.floor(Math.abs(nums[j]) / Math.pow(10, i)) % 10;
      bucket[digit].push(nums[j]);
    }

    nums = [].concat(...bucket);
  }

  return nums;
};

/* Use Counting Sort */
var countingSortArray = function (nums) {
  const counting = [];
  const sorted = [];

  let plus = 0;

  if (Math.min(...nums) < 0) {
    plus = Math.abs(Math.min(...nums));
    nums = nums.map((el) => el + plus);
  }

  nums.forEach((el) => (counting[el] = (counting[el] || 0) + 1));

  for (let i = 0; i < counting.length; i++) {
    while (counting[i] > 0) {
      sorted.push(i);
      counting[i]--;
    }
  }

  return plus > 0 ? sorted.map((el) => el - plus) : sorted;
};
