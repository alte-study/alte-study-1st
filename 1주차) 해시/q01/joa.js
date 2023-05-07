function solution(nums) {
  let map = new Map()
  let capa = nums.length/2
  for(let n=0; n<nums.length; n++){
      if(map.size===capa){
          return capa
      }else if(!map.has(nums[n])){
        map.set(nums[n],0)     
      }
  }
  return map.size
}