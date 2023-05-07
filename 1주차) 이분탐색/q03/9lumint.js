const singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2),
        isEven = mid % 2 === 0;
        if(nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]){
            return nums[mid];
        }
        if(isEven){
            if(nums[mid] === nums[mid - 1]){
                right = mid - 1;
            } else if(nums[mid] === nums[mid + 1]){
                left = mid + 1;
            }
        } else {
            if(nums[mid] === nums[mid - 1]){
                left = mid + 1;
            } else if(nums[mid] === nums[mid + 1]){
                right = mid - 1;
            }
        }
    }
};
