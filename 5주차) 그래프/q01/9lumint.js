class Graph {
  buildGraph = (edges) => {
        this.edges = edges;
        this.graph = new Map();
        const add = (u, v) => {
            this.graph.has(u) || this.graph.set(u, new Map());
            const adjList = this.graph.get(u);
            adjList.set(v, adjList.has(v) ? adjList.get(v) + 1 : 1);
        };
        for (let [u, v] of this.edges) {
            add(u, v), add(v, u);
        }
    };
    constructor(edges) {
        this.buildGraph(edges);
    }
};

const findCenter = function (edges) {
    let g = new Graph(edges);
    for (let [u, adjList] of g.graph)
        if (adjList.size > 1) {
            return u;
        }
};
