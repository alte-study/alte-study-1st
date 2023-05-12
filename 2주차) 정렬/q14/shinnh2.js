/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function pivot(arr, s, e) {
	let p = arr[s];
	let j = s;
	for (let i = s + 1; i <= e; i++) {
		if (p > arr[i]) {
			j++;
			[arr[j], arr[i]] = [arr[i], arr[j]];
		}
	}
	[arr[j], arr[s]] = [arr[s], arr[j]];
	return j;
}
function quickSort(arr, l = 0, r = arr.length - 1) {
	if (l < r) {
		let pivotIdx = pivot(arr, l, r);
		quickSort(arr, l, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, r);
	}
	return arr;
}
var sortColors = function (nums) {
	return quickSort(nums);
};
