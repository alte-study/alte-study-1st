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

const findJudge = function(n, edges) {
    let people = new Set(), g = new Graph({ undirected: false, n, edges });
    for (let u = 1; u <= n; u++) {
        people.add(u);
    }
    for (let [u] of edges) {
        people.delete(u);
    }
    if (people.size !== 1) {
        return -1;
    }
    let j = [...people][0];              
    for (let [u, adjList] of g.G) {
        if (!adjList.has(j)) {
            return -1;
        }
    }
    return j;
};
