/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let leftSide = mergeSort(arr.slice(0, mid));
	let rightSide = mergeSort(arr.slice(mid));
	return merge(leftSide, rightSide);
}
var sortList = function (head) {
	if (head == null) {
		return null;
	}
	let arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}

	let sortedArr = mergeSort(arr);

	head = new ListNode(sortedArr[0]);
	let temp = head;
	for (let i = 1; i < sortedArr.length; i++) {
		temp.next = new ListNode(sortedArr[i]);
		temp = temp.next;
	}
	return head;
};
