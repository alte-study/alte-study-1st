//의사코드
/*
0. 각 정점이 인덱스가 되고 값은 인접 정점들을 배열로가진 2차원 배열 adjacencyList를 만든다.
1. 인접 정점 리스트 adjacencyList를 오름차순 정렬한다.
2. 방문할 정점을 표시할 배열 visited를 정점 수만큼 생성한다.
3. visited에 방문여부를 표시할 때 동시에 값으로 방문순서i를 표시해야 한다.
4. 깊이우선탐색 재귀함수를 만들어 시작정점부터 실행한다. 
	4.1. 아직 방문하지 않은 정점에 visited에 방문순서i를 증가시켜가며 표시하고,
	4.2. 해당 정점의 인접 정점을 순회하며 visited를 활용해 아직 방문하지 않는 정점에 함수를 실행한다. 
5. visited 배열을 알맞은 형태로 리턴한다.
*/

let [info, ...input] = require("fs")
	.readFileSync("./dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((el) => el.split(" ").map((el) => +el));
let [N, M, R] = info;

const adjacencyList = Array.from({ length: N + 1 }, (_) => []);
for (let el of input) {
	let [v1, v2] = el;
	adjacencyList[v1].push(v2);
	adjacencyList[v2].push(v1);
}
for (let i = 1; i < adjacencyList.length; i++) {
	adjacencyList[i].sort((a, b) => a - b);
}
const visited = Array(N).fill(0);
let i = 1;
(function dfs(v) {
	visited[v - 1] = i++;
	for (let vertex of adjacencyList[v]) {
		if (!visited[vertex - 1]) dfs(vertex);
	}
})(R);

console.log(visited.join("\n"));
