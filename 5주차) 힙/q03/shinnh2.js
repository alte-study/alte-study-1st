//의사코드
/*
1. 우선순위큐(힙) PriorityQueueHeap을 만든다.
    1.1. enqueue: score의 각 요소를 삽입해야 한다. {idx:원래 인덱스, score: 점수}
    1.2. bubbleUp: 삽입한 요소를 재정렬해야 한다.
    1.3. dequeue: 우선순위 큐의 가장 큰 요소를 삭제한다. 
    1.4. sinkDown: 요소를 삭제한 뒤 재정렬해야 한다.
2. 우선순위 큐에 사용될 클래스 Node를 만든다: {idx:원래 인덱스, score: 점수}
3. medal목록, PriorityQueueHeap의 인스턴스를 생성한다. 
4. score의 요소들을 순회하며 힙에 {idx:원래 인덱스, score: 점수}로 enqueue 한다.
5. score를 순회하면서 우선순위큐를 dequeue한 값을 알맞은 자리에 넣어준다. 
    5.1. 삭제할 때 점수가 가장 큰 값부터 삭제되므로 
    score[원래 인덱스]에 차례로 "Gold Medal", "Silver Medal", "Bronze Medal"을 부여한다. 
    나머지는 순회하므로 i+1을 부여한다.
6. score를 리턴한다.
*/

//Runtime 96 ms (59.17%), Memory 45.7 MB (30.45%)
class PriorityQueueHeap {
	constructor() {
		this.values = [];
	}
	enqueue(idx, score) {
		let newNode = new Node(idx, score);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.score <= parent.score) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {
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
				if (leftChild.score > element.score) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.score > element.score) ||
					(swap !== null && rightChild.score > leftChild.score)
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
class Node {
	constructor(idx, score) {
		this.idx = idx;
		this.score = score;
	}
}

var findRelativeRanks = function (score) {
	let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
	let pqh = new PriorityQueueHeap();
	score.forEach((el, idx) => pqh.enqueue(idx, el));
	let max;
	for (let i = 0; i < score.length; i++) {
		max = pqh.dequeue();
		if (i < 3) score[max.idx] = medals[i];
		else score[max.idx] = `${i + 1}`;
	}
	return score;
};
