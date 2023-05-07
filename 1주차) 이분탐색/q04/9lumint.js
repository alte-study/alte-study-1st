const serachStartIdx = function (arr, el) {
  return arr.indexOf(el);
};

const serachEndIdx = function (arr, el) {
  return arr.lastIndexOf(el);
};

const searchRange = function (nums, target) {
  let min = 0, max = nums.length - 1, start = -1, end = -1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) {
      start = serachStartIdx(nums, target);
      end = serachEndIdx(nums, target);
      break;
    }
    if (nums[mid] < target) {
      min = mid + 1;
    } else if (nums[mid] > target) {
      max = mid - 1;
    }
  }
  return [start, end];
};
