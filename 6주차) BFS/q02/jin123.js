const fs = require("fs");
const [V, ...info] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
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
  bfs(v, distance) {
    const visited = [];
    const queue = new Queue();
    queue.enqueue(v);
    visited[v] = true;

    while (queue.size) {
      const node = queue.dequeue();
      this.adjacencyList[node].forEach((el) => {
        if (!visited[el[0]]) {
          queue.enqueue(el[0]);
          visited[el[0]] = true;
          distance[el[0]] = el[1] + distance[node];
        }
      });
    }
  }
}
const graph = new Graph();
info.forEach((el) => {
  const [key, ...edges] = el.split(" ").slice(0, -1);
  graph.addVertex(+key);
  for (let j = 0; j < edges.length; j += 2) {
    graph.addEdge(+key, [+edges[j], +edges[j + 1]]);
  }
});
const distance = Array(+V + 1).fill(0);
graph.bfs(1, distance);
let target = distance.reduce((acc, cur, i, arr) => {
  return arr[acc] < cur ? i : acc;
}, 1);
distance.fill(0);
graph.bfs(target, distance);
console.log(Math.max(...distance));
