//의사코드
/*
0. 그래프를 만들기 위한 클래스 Graph를 만든다. 클래스에는 인접리스트, 정점과 간선을 추가할 함수, 너비 우선 탐색 함수가 필요하다.
1. 정점과 간선을 추가할 함수를 만든다.
- 정점2개를 인자로 받아, 
- 각각 인접리스트 adjacencyList에 해당 정점이 있는지 확인하고 없다면 추가한다. 
- 각 정점의 간선 배열에 다른 하나의 정점을 추가한다. 
2. 만들어진 인접리스트를 활용해 너비 우선 탐색 함수를 만든다.
  2.1. 작업을 처리할 정점이 담긴 큐, 방문한 정점의 방문순서를 표시할 배열 visited를 만든다. 
  (visited를 만들 때 입력받은 정점 개수+1만큼 만들어야 한다. 방문하지 않은 정점도 0으로 표시하여 출력해야 하고, 방문순서를 1부터 시작해야 하기 때문이다.)
  2.2. 시작지점 r이 첫번째 방문지이므로 visited[r]은 1, 다음 방문순서 i는 2로 시작한다.
  2.3. 작업을 처리할 큐가 없어질 때까지 다음 과정을 반복한다. 
  2.4. 큐의 첫번째 요소 u를 삭제한다.
  2.5. 큐에서 삭제된 정점u의 간선목록 adjacencyList[u]를 오름차순으로 정렬한다. 
  2.6. 그 간선목록 adjacencyList[u]을 순회하며 각 정점 vertex의 방문여부를 확인하고 처음 방문하는 것이라면 visited[vertex]에 방문순서 i를 할당한다.
  2.6. 다음 방문순서를 위해 i를 1 증가시킨다.
  2.7. 다음에 방문하기 위해 현재 정점 vertex를 작업 큐에 push한다.
  2.8. 모든 과정이 끝나면 visited를 리턴하되, 필요없는 0번째 인덱스를 제외하고 리턴한다. 
3. 입력값을 순회하며 1번에서 만든 함수를 활용해 인접리스트를 만든다.
4. 2번의 함수를 실행시켜 알맞은 형태로 출력한다.
*/

let [info, ...input] = require("fs")
	.readFileSync("./24444.txt")
	.toString()
	.replace(/\r/g, "")
	.trim()
	.split("\n"); // ./24444.txt /dev/stdin

let [N, M, R] = info.split(" ").map((el) => +el);

class Graph {
	constructor() {
		//인접 리스트
		this.adjacencyList = {};
	}
	//정점, 간선 추가
	addVertexAndEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
		if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
	//너비 우선 탐색
	bfs(r) {
		const queue = [r];
		const visited = Array(N + 1).fill(0);
		let i = 2;
		visited[r] = 1;
		while (queue.length) {
			let u = queue.shift();
			this.adjacencyList[u].sort((a, b) => a - b);
			for (let vertex of this.adjacencyList[u]) {
				if (!visited[vertex]) {
					visited[vertex] = i;
					i++;
					queue.push(vertex);
				}
			}
		}
		return visited.splice(1);
	}
}

let g = new Graph();
for (let el of input) {
	let [v1, v2] = el.split(" ");
	g.addVertexAndEdge(+v1, +v2);
}
console.log(g.bfs(R).join("\n"));
