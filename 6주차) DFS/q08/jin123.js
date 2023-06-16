const fs = require("fs");
const [NM, ...edges] = fs
  .readFileSync("/dev/stdin")
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
  dfs(v, visited, count = 0) {
    if (count === 4) return 1;
    let flag = 0;
    visited[v] = true;
    for (const el of this.adjacencyList[v]) {
      if (!visited[el]) {
        flag = this.dfs(el, visited, count + 1);
        if (flag) return flag;
      }
    }
    visited[v] = false;
    return flag;
  }
}
const graph = new Graph();
let visited = [];
for (let i = 0; i < N; i++) {
  graph.addVertex(i);
}
edges.forEach((el) => {
  graph.addEdge(...el.split(" ").map(Number));
});
let flag = 0;
for (let i = 0; i < N; i++) {
  if (flag) break;
  flag = graph.dfs(i, visited);
  visited = [];
}
console.log(flag);
