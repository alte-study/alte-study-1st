/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let hashMap = new Map ()
    let result=[];
    nums.reduce((acc,cur,idx)=>{
            if(hashMap.has(cur)){
                return hashMap.set(cur,[...hashMap.get(cur),idx])
            } else return hashMap.set(cur,[idx])
    },hashMap)
    for (let key of hashMap.keys()) {
        if(hashMap.has(target-key)){
            if(key === target-key && hashMap.get(key).length>=2){
                result = [...result,hashMap.get(key).pop()]
                result = [...result,hashMap.get(key).pop()]
                hashMap.get(key).length===0 && hashMap.delete(key)
            }
            else if(key !== target-key){
                result = [...result,...hashMap.get(key)]
                hashMap.delete(key)
                result = [...result,...hashMap.get(target-key)]
                hashMap.delete(target-key)
            }
        }
    }
    return result
};