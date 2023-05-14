/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
  const merge = (left, mid, right) => {
    const arr1 = nums.slice(left, mid + 1);
    const arr2 = nums.slice(mid + 1, right + 1);
    let i = 0;
    j = 0;
    k = left;
    for (; i < arr1.length && j < arr2.length; k++) {
      if (arr1[i] >= arr2[j]) {
        nums[k] = arr2[j];
        j++;
      } else {
        nums[k] = arr1[i];
        i++;
      }
    }
    while (i < arr1.length) {
      nums[k++] = arr1[i++];
    }
    while (j < arr2.length) {
      nums[k++] = arr2[j++];
    }
  };
  const mergeSort = (left, right) => {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      mergeSort(left, mid);
      mergeSort(mid + 1, right);
      merge(left, mid, right);
    }
  };
  mergeSort(0, nums.length - 1);
  return nums;
};
