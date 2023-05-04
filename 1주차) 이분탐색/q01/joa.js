/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0
  let end = nums.length-1
  let mid = Math.ceil((start+end)/2)
  while(start<=end){
      if(nums[mid]===target){
          return mid
      }else if(target<nums[mid]){
          end = mid-1
          mid = Math.ceil((start+end)/2)
      }else if(target>nums[mid]){
          start = mid+1
          mid = Math.ceil((start+end)/2)
      }
  }
  if(target < nums[mid]){
      return mid
  }else {
      return nums.length
  }
      
  

};