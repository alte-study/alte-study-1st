//의사코드
/*
1. 정점과 간선, 인접리스트를 만들기 위해 클래스 Graph를 생성한다.
  1.1. addVertex: 정점을 추가한다.
  1.2. addEdges: 간선을 추가한다.
2. Graph의 인스턴스를 생성하고, 입력값을 순회하며 그래프를 만든다.(정점 추가, 간선 추가)
3. 각 부모의 출력하기 위해 전체 노드 개수+1만큼 0으로 채운 배열 parent, 처리를 위한 빈 배열 queue를 선언한다.
4. 현재 정점 nowVertex에 1을 삽입한다.
5. nowVertex의 인접리스트를 차례대로 확인하고 
  5.1. 노드가 1이 아니고, 부모가 0이라면
  > nowVertex으로 노드의 부모를 갱신하고,
  > 해당 노드를 queue에 삽입한다.
6. 확인한 정점을 queue에서 삭제한다.
7. queue를 확인하여 queue가 없어질 때까지 nowVertex를 queue의 요소로 바꿔가며 5~6을 반복한다.
8. parent의 2번째부터 끝까지 출력한다.
*/

let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
N = +N;

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
}
const solution = (input) => {
	let g = new Graph();
	input.map((el) => {
		const [from, to] = el.split(" ");
		g.addVertex(from);
		g.addVertex(to);
		g.addEdge(from, to);
	});
	let parent = Array.from({ length: N + 1 }, () => 0);
	let queue = ["1"];
	let nowVertex;
	do {
		nowVertex = queue.shift();
		for (let v of g.adjacencyList[nowVertex]) {
			if (v !== "1" && parent[+v] === 0) {
				parent[+v] = nowVertex;
				queue.push(v);
			}
		}
	} while (queue.length);
	return parent.slice(2).join("\n");
};
console.log(solution(input));
