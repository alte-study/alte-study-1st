const insertionSortList = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  for (let i = 1; i < arr.length; i++) {
    let j = i,
      memo = arr[i];
    while (j > 0 && arr[j - 1] > memo) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = memo;
  }
  let answer = new ListNode(),
    pointer = answer;
  for (let k = 0; k < arr.length; k++) {
    pointer.next = new ListNode(arr[k]);
    pointer = pointer.next;
  }
  return answer.next;
};
