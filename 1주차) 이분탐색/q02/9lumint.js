const nextGreatestLetter = function(letters, target) {
    let lettersArr = [...new Set(letters)];
    let max = lettersArr.length - 1, min = 0, mid;
    if(lettersArr[0] === target){
        return lettersArr[1];
    } else if(lettersArr[0] > target || lettersArr[max] <= target){
        return lettersArr[0];
    }
    while(min <= max){
        mid = Math.floor((min + max) / 2);
        if(lettersArr[mid] === target){
            return lettersArr[mid + 1];
        } else if(lettersArr[mid] > target){
            if(lettersArr[mid - 1] <= target){
                return lettersArr[mid];
            } else {
                max = mid - 1;
            }
        } else {
            if(lettersArr[mid + 1] > target){
                return lettersArr[mid + 1];
            } else if(lettersArr[mid + 1] === target){
                return lettersArr[mid + 2];
            } else {
                min = mid + 1;
            }
        }
    }
};
