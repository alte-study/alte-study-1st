/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let idxMap = arr2.reduce((acc,cur,idx)=>{
      return acc.set(cur,idx)
  },new Map())
  let map = new Map()
  for(ele of arr1){
      let idx = idxMap.has(ele) ?idxMap.get(ele) :idxMap.size
      map.has(idx) ? map.set(idx,[...map.get(idx),ele]) : map.set(idx,[ele])
  }
  map.has(idxMap.size) && map.get(idxMap.size).sort((a,b) => a - b)
  //인덱스 순으로 안정렬되어 있음 맵을 key기준으로 정렬해야함
  // 1.
  // let result = [];
  // for(let n=0; n<map.size; n++){
  //     result = [...result, ...map.get(n)]
  // }
  //2.
  map = new Map([...map].sort((a,b) => a[0]-b[0]))
  return [...map.values()].flat()
};