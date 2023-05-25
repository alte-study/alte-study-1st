const canJump = function (nums) {
  let idx = 0, max = 0;
  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);
    if (max >= nums.length - 1) {
      return true;
    }
    if (max <= idx && !nums[idx]) {
      return false;
    }
    idx++;
  }
  return false;
};
