/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1927
 * Problem Number: 1927
 * Level: Silver II
 * Algorithm: 자료 구조 / 우선순위 큐
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

/* pseudocode
   1. 최소 힙을 구현한다. (부모 노드 < 자식 노드)
   2. push
   2-1. 현재 노드가 부모 노드보다 값이 크다면 부모와 현재 노드의 값을 교환
   3. pop
   3-1. 1번 노드의 왼쪽 자식 노드가 존재하지 않으면 1번 노드만 존재하는 것이므로
        노드를 초기화 하고 1번 노드를 리턴
   3-2. 1번 노드의 오른쪽 자식 노드가 존재하지 않는데 왼쪽 자식 노드는 존재한다면
        1번 노드와 왼쪽 자식 노드의 값을 비교한 뒤 더 큰 값을 자식 노드로 변경
   3-3. 1번 노드의 자식 노드들이 모두 존재하면서 1번 노드의 값이 자식 노드보다 더 크다면
        자식들 중 더 작은 값을 1번 노드와 변경
   4. 구현한 최소 힙 인스턴스를 생성
   5. 입력값을 순회하면서 입력값이 0이라면 힙에서 가장 작은 값을 출력 (pop)하고
      입력값이 0이 아니라면 힙에 해당 값을 삽입 (push)
*/

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) {
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ];

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    const MIN_VALUE = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftChildIdx = currentIdx * 2;
    let rightChildIdx = currentIdx * 2 + 1;

    // 1번 노드의 왼쪽 자식 노드가 없다면 1번 노드만 존재하는 것
    if (!this.heap[leftChildIdx]) return MIN_VALUE;

    // 1번 노드의 오른쪽 자식 노드가 없는데
    if (!this.heap[rightChildIdx]) {
      // 왼쪽 자식 노드는 존재한다면 1번 노드와 왼쪽 자식 노드를 비교한 후 값이 더 큰 것을 자식 노드로
      if (this.heap[leftChildIdx] < this.heap[currentIdx])
        [this.heap[leftChildIdx], this.heap[currentIdx]] = [
          this.heap[currentIdx],
          this.heap[leftChildIdx],
        ];

      return MIN_VALUE;
    }

    // 1번 노드의 자식 노드가 모두 존재하고 1번 노드가 자식 노드들 보다 값이 큰 경우
    while (
      this.heap[leftChildIdx] < this.heap[currentIdx] ||
      this.heap[rightChildIdx] < this.heap[currentIdx]
    ) {
      const MIN_IDX =
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      // 자식 노드 중 더 작은 값을 부모 노드와 변경
      [this.heap[MIN_IDX], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[MIN_IDX],
      ];

      currentIdx = MIN_IDX;
      leftChildIdx = currentIdx * 2;
      rightChildIdx = currentIdx * 2 + 1;
    }

    return MIN_VALUE;
  }
}

const result = [];
const heap = new MinHeap();

for (const el of input) {
  if (el) heap.push(el);
  else {
    const MIN_VALUE = heap.pop();

    if (MIN_VALUE) result.push(MIN_VALUE);
    else result.push(0);
  }
}

console.log(result.join('\n'));
