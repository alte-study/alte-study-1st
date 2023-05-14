var findKthLargest = function(nums, k) {
  let upper = []
  let lower = []
  let randomNumber = Math.floor(Math.random() * nums.length)
  let pivot = nums[randomNumber]
  let searchidx = 0

  while(searchidx !== nums.length){
      if(searchidx !== randomNumber){
          if(pivot <= nums[searchidx]){
              upper.push(nums[searchidx])
          }else if(pivot > nums[searchidx]){
              lower.push(nums[searchidx])
          }
      }
      searchidx += 1
  }

  if(upper.length === k-1){
      return pivot
  }else if(upper.length > k-1){
      return findKthLargest(upper, k)
  }else {
      return findKthLargest(lower, k-upper.length-1)
  }
};