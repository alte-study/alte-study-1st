/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let start = 0
  let end = nums.length-1
  let mid = Math.ceil((start+end)/2)
  while(start<=end){
      if(nums[mid+1] !== nums[mid] && nums[mid] !== nums[mid-1]){
          return nums[mid]
      }else if(mid%2!==0){
          if(nums[mid] === nums[mid-1]){
              start = mid+1
              mid = Math.ceil((start+end)/2)
          }else{
              end = mid-1
              mid = Math.ceil((start+end)/2)
          }
      }else if(mid%2===0){
          if(nums[mid] === nums[mid+1]){
              start = mid+1
              mid = Math.ceil((start+end)/2)
          }else{
              end = mid-1
              mid = Math.ceil((start+end)/2)
          }
      }
  }

};