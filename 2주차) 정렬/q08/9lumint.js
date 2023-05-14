const sortArray = function(nums) {
    if(nums.length === 1){
        return nums;
    }
    let mid = Math.floor(nums.length / 2),
        left = nums.slice(0, mid),
        right = nums.slice(mid, nums.length);
    return merge(sortArray(left), sortArray(right));
};

const merge = function(left, right){
    let answer = [],
        idxL = 0,
        idxR = 0;
    while(idxL < left.length && idxR < right.length){
        left[idxL] < right[idxR] ? answer.push(left[idxL++]) : answer.push(right[idxR++]);
    }
    while(idxL < left.length){
        answer.push(left[idxL++]);
    }
    while(idxR < right.length){
        answer.push(right[idxR++]);
    }
    return answer;
};
