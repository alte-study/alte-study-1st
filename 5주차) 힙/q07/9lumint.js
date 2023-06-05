class Heap {
  constructor(arr) {
    this.heap = arr;
    this.size = arr.length;
    this.heapify(0);
  }
  left(parentidx) {
    return 2 * parentidx + 1;
  }
  right(parentidx) {
    return 2 * parentidx + 2;
  }
  isChild(idx) {
    if (2 * idx + 1 >= this.size) {
      return true;
    }
    return false;
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  fix(idx) {
    if (this.isChild(idx)) {
      return;
    }
    let left = this.left(idx),
      right = this.right(idx),
      bigger = left;
    if (right < this.size) {
      bigger = this.heap[left] > this.heap[right] ? left : right;
    }
    if (this.heap[idx] < this.heap[bigger]) {
      this.swap(idx, bigger);
      this.fix(bigger);
    }
  }
  heapify(idx) {
    if (this.isChild(idx)) {
      return;
    }
    this.heapify(this.left(idx));
    this.heapify(this.right(idx));
    this.fix(idx);
  }
  delete() {
    this.swap(0, --this.size);
    this.fix(0);
    return this.heap[0];
  }
  insert(val) {
    this.size++;
    this.heap[this.size - 1] = val;
    this.heapify(0);
  }
  peek() {
    return this.heap[0];
  }
}

const maxProduct = function(nums) {
    let heap = new Heap(nums), a, b;
    a = heap.peek();
    heap.delete();
    b = heap.peek();
    return (a - 1) * (b - 1);
};
