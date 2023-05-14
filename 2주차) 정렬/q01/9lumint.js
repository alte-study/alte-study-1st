const sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let fast = head,
    slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let mid = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(mid));
};

const merge = function (left, right) {
  let answer = new ListNode(),
    temp = answer;
  while (left && right) {
    temp.next = left.val < right.val ? left : right;
    temp = temp.next;
    left.val < right.val ? (left = left.next) : (right = right.next);
  }
  if (left) {
    temp.next = left;
  } else if (right) {
    temp.next = right;
  }
  return answer.next;
};
