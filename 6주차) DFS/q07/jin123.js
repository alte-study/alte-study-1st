const fs = require("fs");
const [NM, ...edges] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  dfs(v, visited) {
    visited[v] = true;
    this.adjacencyList[v].forEach((el) => {
      if (!visited[el]) {
        this.dfs(el, visited);
      }
    });
  }
}

const graph = new Graph();
const visited = Array(N + 1).fill(false);
let count = 0;

for (let i = 1; i <= N; i++) {
  graph.addVertex(i);
} //정점 추가
edges.forEach((el) => {
  graph.addEdge(...el.split(" ").map(Number));
}); //간선 추가

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    graph.dfs(i, visited);
    count++;
  }
}
console.log(count);
