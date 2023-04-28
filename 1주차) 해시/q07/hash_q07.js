const twoSumVer1 = function(nums, target) {
  let result = [];
  let one = 0
  let theother = 1
  while(result.length<2){
      if(nums[one]+nums[theother]===target){
          result = [one, theother]
          return result
      } else if (theother === nums.length-1){
          one = one + 1
          theother = one + 1
      } else {
          theother = theother + 1
      }
  }
};

const twoSumVer2 = function(nums, target) {
  let map = new Map()
  for(let n=0 ; n<nums.length ; n++){
      for (let [key, value] of map){
          if(value+nums[n] === target){
              return [key,n]
          }
      }
      map.set(n,nums[n])
  }
};