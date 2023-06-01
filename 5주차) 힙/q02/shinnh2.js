let [_, ...input] = require("fs")
	.readFileSync("./11279.txt")
	.toString()
	.replace(/\r/g, "")
	.trim()
	.split("\n"); // ./11279.txt /dev/stdin

//의사코드
/*
1. 최대힙 클래스 MaxHeap을 만든다.
	1.1. insert: 배열에 자연수를 삽입해야 한다. 
	(bubbleUp은 마지막에 삽입된 배열을 알맞은 자리에 정렬하기 위해 필요)
	1.2. findNDeleteMax: 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거해야 한다. 
	(sinkDown은 첫번째 자리의 값을 삭제하고 마지막 요소를 삽입했으므로, 알맞은 자리에 정렬하기 위해 필요)
	1.3. swap: 배열을 정렬할 때 교환이 필요하다.
	1.4. empty: 배열이 비어있는지 아닌지 판별해야 한다.
2. 출력값을 보관할 output을 선언한다.
3. MaxHeap의 인스턴스를 생성한다.
4. 입력값의 모음인 input을 순회하며 출력할 값을 추가한다.
	4.1. 숫자가 0인 경우
	> 배열이 비어있다면 0을 출력한다. (empty) 
	> 배열이 비어있지 않다면 가장 큰 값을 출력하고 제거해야 한다. (findNDeleteMax)
	4.2. 숫자가 0이 아닌 자연수라면 배열에 삽입한다. (insert)
5. output을 출력한다.
*/

input = input.map((el) => +el);

class MaxHeap {
	constructor() {
		this.heap = [];
	}
	empty() {
		if (this.heap.length == 0) return true;
		return false;
	}
	swap(arr, x, y) {
		[arr[x], arr[y]] = [arr[y], arr[x]];
		return;
	}
	insert(value) {
		this.heap.push(value);
		this.bubbleUp(this.heap.length - 1);
	}
	bubbleUp(index) {
		let currentIdx = index;
		while (currentIdx > 0) {
			const parentIdx = Math.floor((currentIdx - 1) / 2);
			if (this.heap[parentIdx] >= this.heap[currentIdx]) break;
			this.swap(this.heap, parentIdx, currentIdx);
			currentIdx = parentIdx;
		}
	}
	findNDeleteMax() {
		if (this.heap.length == 1) {
			return this.heap.pop();
		}
		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.sinkDown(0);
		return min;
	}
	sinkDown(index) {
		const leftIdx = 2 * index + 1;
		const rightIdx = 2 * index + 2;
		const length = this.heap.length;
		let smallestIdx = index;

		if (leftIdx < length && this.heap[leftIdx] > this.heap[smallestIdx]) {
			smallestIdx = leftIdx;
		}
		if (rightIdx < length && this.heap[rightIdx] > this.heap[smallestIdx]) {
			smallestIdx = rightIdx;
		}
		if (smallestIdx !== index) {
			this.swap(this.heap, index, smallestIdx);
			this.sinkDown(smallestIdx);
		}
	}
}

let output = "";
let maxHeap = new MaxHeap();
for (let el of input) {
	if (el == 0) {
		if (maxHeap.empty()) output += "0\n";
		else output += `${maxHeap.findNDeleteMax()}\n`;
	} else {
		maxHeap.insert(el);
	}
}
console.log(output.trim());
