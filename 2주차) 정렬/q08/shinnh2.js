/**
 * @param {number[]} nums
 * @return {number[]}
 */
function merge(arr1, arr2) {
	let mergedArr = [];
	let idx1 = 0;
	let idx2 = 0;
	while (idx1 < arr1.length && idx2 < arr2.length) {
		if (arr1[idx1] < arr2[idx2]) {
			mergedArr.push(arr1[idx1]);
			idx1++;
		} else {
			mergedArr.push(arr2[idx2]);
			idx2++;
		}
	}
	while (idx1 < arr1.length) {
		mergedArr.push(arr1[idx1]);
		idx1++;
	}
	while (idx2 < arr2.length) {
		mergedArr.push(arr2[idx2]);
		idx2++;
	}
	return mergedArr;
}
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
var sortArray = function (nums) {
	return mergeSort(nums);
};
