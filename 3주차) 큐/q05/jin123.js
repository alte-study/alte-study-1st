/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let lmax = 0,
    gmax = nums[0];
  let lmin = 0,
    gmin = nums[0];
  let sum = 0;
  for (const num of nums) {
    lmax = Math.max(num, lmax + num);
    if (gmax < lmax) gmax = lmax;
    lmin = Math.min(num, lmin + num);
    if (gmin > lmin) gmin = lmin;
    sum += num;
  }
  return Math.max(gmax, sum - gmin || gmin);
};
