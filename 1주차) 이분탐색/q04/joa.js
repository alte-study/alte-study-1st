/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function findTail(nums, target, start, end) {
  let mid = Math.ceil((start+end)/2)
      while(start<=end){
          console.log(mid)
          if(nums[mid]===target){
              if(nums[mid+1]!==target){
                  return mid
              }else{
                  start = mid + 1
                  mid = mid = Math.ceil((start+end)/2)
              }
          }else {
              if(nums[mid-1]===target){
                  return mid-1
              }else {
                  end = mid - 1
                  mid = mid = Math.ceil((start+end)/2)
              }
          }
      }
  } 
function findHead(nums, target, start, end) {
  let mid = Math.ceil((start+end)/2)
      while(start<=end){
          if(nums[mid]===target){
              if(nums[mid-1]!==target){
                  return mid
              }else{
                  end = mid - 1
                  mid = mid = Math.ceil((start+end)/2)
              }
          }else {
              if(nums[mid+1]===target){
                  return mid+1
              }else {
                  start = mid + 1
                  mid = mid = Math.ceil((start+end)/2)
              }
          }
      }
  }     

      

var searchRange = function(nums, target) {
  let start = 0
  let end = nums.length-1
  let mid = Math.ceil((start+end)/2)
  let result;
  while(start<=end){
      if(nums[mid]===target){
          let tail = findTail(nums, target, mid, nums.length-1)
          let head = findHead(nums, target, 0, mid)
          return [head,tail]
      }else if(target<nums[mid]){
          end = mid-1
          mid = Math.ceil((start+end)/2)
      }else if(target>nums[mid]){
          start = mid+1
          mid = Math.ceil((start+end)/2)
      }
  }
  return [-1, -1]
};