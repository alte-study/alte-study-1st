const searchInsert = function(nums, target) {
    let min = 0, max = nums.length - 1, mid;
    if(target <= nums[min]){
        return 0;
    } else if(target > nums[max]){
        return nums.length;   
    }
    while(min <= max){
        mid = Math.floor((max + min) / 2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] < target){
            min = mid + 1;
        } else if(nums[mid] > target){
            max = mid - 1;
        }
    }
    return min;
};
