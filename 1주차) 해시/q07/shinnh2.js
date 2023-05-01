/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	//0. hash, first
	//1. first에 nums의 첫번째 요소를 할당한다.
	//2. first+nums[1]이 target인지 아닌지 확인한다.
	//  2.1. first+nums[1]이 target이 아니라면 넘어간다.
	//  2.3. first+nums[1]가 target이라면 [first, nums[1]]을 리턴한다.
	//3. 2번을 first를 제외한 nums의 나머지 요소만큼 반복한다.
	for (let i = 0; i < nums.length; i++) {
		let first = i;
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[first] + nums[j] !== target) continue;
			else return [first, j];
		}
	}
};
