var searchInsert = function (nums, target) {
	let lowIndex = 0;
	let highIndex = nums.length - 1;
	let midIndex = Math.floor((lowIndex + highIndex) / 2);
	while (nums[midIndex] !== target && lowIndex <= highIndex) {
		if (target < nums[midIndex]) {
			highIndex = midIndex - 1;
		} else {
			lowIndex = midIndex + 1;
		}
		midIndex = Math.floor((lowIndex + highIndex) / 2);
	}
	return nums[midIndex] === target ? midIndex : lowIndex;
};
