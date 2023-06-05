//의사코드
/*
1. 그래프 클래스를 생성한다.
  1.1. addVertex: 정점을 추가한다.
  1.2. addEdge: 간선을 추가한다.
  1.3. DFSI: 순환형 깊이 우선 탐색 방식으로 정점들을 탐색한다.
2. 그래프의 인스턴스를 생성한다.
3. edges를 순회하면 모든 정점을 추가하고, 간선을 추가한다.
4. 정점을 찾는다. 정점에 인접하는 정점의 갯수가 전체 정점 개수-1이라면 그 정점이 center이다.
5. 해당 정점을 찾는 즉시 리턴한다.
*/
/**
 * @param {number[][]} edges
 * @return {number}
 */
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
	DFSI(startVertex) {
		const result = [];
		const visited = {};
		const stack = [startVertex];
		let currentVertex;

		visited[startVertex] = true;
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach((el) => {
				if (!visited[el]) {
					visited[el] = true;
					stack.push(el);
				}
			});
		}
		return result;
	}
}
var findCenter = function (edges) {
	let g = new Graph();
	for (let el of edges) {
		g.addVertex(el[0]);
		g.addVertex(el[1]);
		g.addEdge(el[0], el[1]);
	}
	let vertexes = [...g.DFSI(edges[0][0])];
	for (let v of vertexes) {
		if (g.adjacencyList[v].length === vertexes.length - 1) return v;
	}
};
