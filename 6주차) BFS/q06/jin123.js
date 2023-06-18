const fs = require("fs");
const [N, ...info] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/g)
  .map(Number);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
  }
  bfs(v, visited) {
    const queue = [v];
    visited[v] = 0;
    while (queue.length) {
      const vertex = queue.shift();
      for (const el of this.adjacencyList[vertex]) {
        if (el === N) return visited[vertex] + 1;
        if (!visited[el]) {
          queue.push(el);
          visited[el] = visited[vertex] + 1;
        }
      }
    }
  }
}
if (N === 1) {
  console.log(0);
  return;
}
const graph = new Graph();
const visited = [];
for (let i = 1; i <= N; i++) {
  graph.addVertex(i);
}
info.forEach((el, i) => {
  for (let j = 1; j <= el; j++) {
    graph.addEdge(i + 1, i + 1 + j);
  }
});

const answer = graph.bfs(1, visited);
console.log(answer ?? -1);
