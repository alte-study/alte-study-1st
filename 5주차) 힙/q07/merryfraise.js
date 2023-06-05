/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 1464
 * Level: Easy
 * Algorithm: Array / Sorting / Heap (Priority Queue)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/* pseudocode
   1. 최대 힙 구현
   2. 힙에서 꺼낸 맨 앞 숫자를 2번 꺼내 각 숫자에서 1을 뺀 만큼 곱한다.
*/

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (currentIdx > 1 && this.heap[parentIdx] < this.heap[currentIdx]) {
      this.swap(currentIdx, parentIdx);

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    const MAX_VALUE = this.heap[1];

    if (this.size() <= 1) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftChildIdx = currentIdx * 2;
    let rightChildIdx = currentIdx * 2 + 1;

    if (!this.heap[leftChildIdx]) return MAX_VALUE;

    if (!this.heap[rightChildIdx]) {
      if (this.heap[leftChildIdx] > this.heap[currentIdx])
        this.swap(currentIdx, leftChildIdx);

      return MAX_VALUE;
    }

    while (
      this.heap[leftChildIdx] > this.heap[currentIdx] ||
      this.heap[rightChildIdx] > this.heap[currentIdx]
    ) {
      const MAX_IDX = !this.heap[rightChildIdx]
        ? leftChildIdx
        : this.heap[leftChildIdx] > this.heap[rightChildIdx]
        ? leftChildIdx
        : rightChildIdx;

      this.swap(currentIdx, MAX_IDX);

      currentIdx = MAX_IDX;
      leftChildIdx = currentIdx * 2;
      rightChildIdx = currentIdx * 2 + 1;
    }

    return MAX_VALUE;
  }
}

var maxProduct = function (nums) {
  const heap = new MaxHeap();

  nums.forEach((el) => heap.push(el));

  return (heap.pop() - 1) * (heap.pop() - 1);
};
