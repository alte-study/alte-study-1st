function solution(clothes) {
  let map = new Map()
  let result = 1
  for(let n=0; n<clothes.length; n++){
      if(!map.has(clothes[n][1])){
          map.set(clothes[n][1], [clothes[n][0]])
      }else{
          map.set(clothes[n][1],[...map.get(clothes[n][1]),clothes[n][0]])
      }
  }
  for(let [key,value] of map){
      result *= value.length+1
  }
  return result-1
}