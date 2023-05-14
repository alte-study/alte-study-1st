/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const partition = (left, right) => {
    let idx1 = left + 1,
      idx2 = right;
    let pivot = nums[left];
    while (idx1 <= idx2) {
      while (idx1 <= idx2 && pivot > nums[idx1]) {
        idx1++;
      }
      while (idx1 <= idx2 && pivot <= nums[idx2]) {
        idx2--;
      }
      if (idx1 < idx2) {
        [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
      }
    }
    nums[left] = nums[idx2];
    nums[idx2] = pivot;
    return idx2;
  };

  const quickSort = (left, right) => {
    if (left >= right) return;
    let pivotIdx = partition(left, right);
    quickSort(left, pivotIdx - 1);
    quickSort(pivotIdx + 1, right);
  };
  quickSort(0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;
  while (mid <= right) {
    if (nums[mid] === 1) mid++;
    else if (nums[mid] === 0) {
      swap(left, mid);
      left++, mid++;
    } else {
      swap(mid, right);
      right--;
    }
  }
  function swap(idx1, idx2) {
    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
  }
};
