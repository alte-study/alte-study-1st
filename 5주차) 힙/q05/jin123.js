const fs = require("fs");
const [_, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    element.forEach((el) => {
      this.values.push(+el);
      this.bubbleUp();
    });
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
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
}
let heap = new MaxBinaryHeap();
let result = [];
arr.forEach((el) => {
  if (el === "0") {
    let target = heap.extractMax();
    result.push(target ? target : -1);
  } else {
    heap.insert(el.split(" ").slice(1));
  }
});
console.log(result.join("\n"));
