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

//의사코드
// 0. 현재 정렬해야할 값 nowValue
// 1. 현재 정렬해야할 값 nowValue를 하나씩 이전 방향으로 비교해가며 정렬해야 한다. 따라서 1번째 값부터 정렬해야할 값으로 정한다.
// 2. 정렬해야할 값의 이전방향으로 하나씩 되짚어가며 비교한다. nowValue보다 그 이전의 값이 크다면 현재 자리에 그 이전의 값으로 바꿔준다.
//   2.1. 현재 자리의 값은 nowValue에 저장되어 있다.
// 3. 2번을 0번째 자리까지, 이전 값들이 nowValue보다 클 동안 반복한다.
// 4. 3번이 종료되고나서 그 다음의 자리가 nowValue의 자리가 된다.
// 5. 1~4번을 마지막 요소까지 반복한다.

var insertionSortList = function (head) {
	let arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}

	for (let i = 1; i < arr.length; i++) {
		let nowValue = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > nowValue; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = nowValue;
	}

	let answer = new ListNode();
	arr.forEach((el) => {
		answer.next = new ListNode(el);
		answer = answer.next;
	});
	return answer.next;
};
