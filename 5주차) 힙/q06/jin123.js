const fs = require("fs");
let [_, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx] >= element) return;
      this.values[idx] = this.values[parentIdx];
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
  getTop() {
    return this.values[0];
  }
  changeMax(value) {
    this.values[0] = value;
    this.sinkDown();
  }
  getSize() {
    return this.values.length;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx] <= element) return;
      this.values[idx] = this.values[parentIdx];
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  getTop() {
    return this.values[0];
  }
  changeMin(value) {
    this.values[0] = value;
    this.sinkDown();
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
  getTop() {
    return this.values[0];
  }
  getSize() {
    return this.values.length;
  }
}

let minHeap = new MinBinaryHeap();
let maxHeap = new MaxBinaryHeap();
let result = [];
numbers.forEach((el) => {
  if (minHeap.getSize() === maxHeap.getSize()) {
    maxHeap.insert(el);
  } else {
    minHeap.insert(el);
  }
  const minTop = minHeap.getTop();
  const maxTop = maxHeap.getTop();
  if (minTop < maxTop) {
    maxHeap.changeMax(minTop);
    minHeap.changeMin(maxTop);
  }
  result.push(maxHeap.getTop());
});

console.log(result.join("\n"));
