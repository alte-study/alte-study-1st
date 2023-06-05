const fs = require("fs");
const [NM, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));
const N = NM[0];
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
  dfs(start, trust) {
    const stack = [start];
    const visited = [];
    visited[start] = true;
    while (stack.length) {
      let currentV = stack.pop();
      this.adjacencyList[currentV].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
          trust[v] = trust[v] + 1 || 1;
        }
      });
    }
  }
}

let graph = new Graph();
for (let i = 1; i <= N; i++) {
  graph.addVertex(i);
}
arr.forEach((el) => {
  graph.addEdge(el[0], +el[1]);
});

const trust = {};
for (let i = 1; i <= N; i++) {
  graph.dfs(i, trust);
}
const max = Math.max(...Object.values(trust));

console.log(
  Object.entries(trust)
    .filter((el) => el[1] === max)
    .map((el) => el[0])
    .join("\n")
);
