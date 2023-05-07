/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let start = 0
  let end = letters.length-1
  let mid = Math.ceil((start+end)/2)
  while(start<=end){
      if(target<letters[mid]){
          if(mid===0){
              return letters[mid]
          }else if(letters[mid-1]<=target){
              return letters[mid]
          }else{
              end = mid-1
              mid = Math.ceil((start+end)/2)
          }
      }else{
              start = mid+1
              mid = mid = Math.ceil((start+end)/2)
      }

  }
  return letters[0]

};