class Graph {
  buildGraph = ({ undirected, V, edges }) => {
      const add = (u, v) => {
          this.G.has(u) || this.G.set(u, new Map());
          const adjList = this.G.get(u);
          adjList.set(v, adjList.has(v) ? adjList.get(v) + 1 : 1);
      };
      this.undirected = undirected;
      this.V = V;
      this.edges = edges;
      this.G = new Map();
      if (undirected) {
          for (let [u, v] of this.edges) {
              add(u, v), add(v, u);
          }
      } else {
          for (let [u, v] of this.edges) {
              add(u, v);
          }
      }
  };
  constructor({ undirected, V, edges }) {
      this.buildGraph({ undirected, V, edges });
  }
};

const findSmallestSetOfVertices = function(n, edges) {
  let graph = new Graph({ undirected: false, n, edges }).G;
  let ans = new Set();
  for (let u = 0; u < n; u++) {
      ans.add(u);
  }
  for (let u = 0; u < n; u++) {
      if (graph.has(u))
          for (let [v] of graph.get(u)) {
              ans.delete(v);
          }
  }
  return [...ans];
};
