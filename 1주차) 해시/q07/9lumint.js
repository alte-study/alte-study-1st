const twoSum = function (nums, target) {
  let sum = {};
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum[nums[i] + nums[j]] = [i, j];
    }
  }
  return sum[target];
};

/*런타임 및 메모리 보완 버전*/
const twoSum = function (nums, target) {
  let sum = {};
  for (let i = 0; i < nums.length; i++) {
    if (sum[nums[i]] !== undefined) {
      return [sum[nums[i]], i];
    }
    sum[target - nums[i]] = i;
  }
};
