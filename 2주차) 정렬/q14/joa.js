/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let max=Math.max(...nums)
  let countingArr = new Array(max+1).fill(0)
  for(let ele of nums){
      countingArr[ele] ++
  }
  for(let n=1 ; n<countingArr.length; n++){
      countingArr[n] += countingArr[n-1]
  }
  let copied = nums.slice()
  for(let ele of copied){
      idx = countingArr[ele]-1
      nums[idx]=ele
      countingArr[ele] --
  }
};