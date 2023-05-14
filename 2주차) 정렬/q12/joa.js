var merge = function(intervals) {
  let sorted = mergeSort(intervals)
  let map = new Map()

  let arr = [...map]
  for(let n=0; n<sorted.length; n++){
      lastValue = [...map.values()][map.size-1]
      lastKey = [...map.keys()][map.size-1]
      if(map.size===0){
          map.set(sorted[n][0],sorted[n][1])
      }else if(sorted[n][0]<=lastValue && lastValue<=sorted[n][1]){
          map.set(lastKey, sorted[n][1])
      }else if(lastValue<sorted[n][0]){
          map.set(sorted[n][0],sorted[n][1])
      }
  }
  return [...map]
};

const merging = function(left, right) {
const sortedArr = [];
while (left.length && right.length) {
  if (left[0][0] <= right[0][0]) {
    sortedArr.push(left.shift());
  } else {
    sortedArr.push(right.shift());
  }
}
return [...sortedArr, ...left, ...right];
}

const mergeSort = function(arr){
if (arr.length === 1) return arr;
const boundary = Math.floor(arr.length / 2);
const left = arr.slice(0, boundary);
const right = arr.slice(boundary);
return merging(mergeSort(left), mergeSort(right));
}