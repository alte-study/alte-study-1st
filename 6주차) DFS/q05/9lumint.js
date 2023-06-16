let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift()),
  [a, b] = input.shift().split(" ").map(Number),
  m = Number(input.shift()),
  arr = input.map((v) => v.split(" ").map(Number));
let answer,
  degree = 0,
  visited = Array(n + 1).fill(false);
  graph = [...Array(n + 1)].map(() => []);

arr.map(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

const dfs = (start, depth) => {
  if (start === b) {
    answer = depth;
  }
  for (const v of graph[start]) {
    if (!visited[v]) {
      visited[v] = true;
      dfs(v, depth + 1);
    }
  }
};
dfs(a, degree);
answer ? console.log(answer) : console.log(-1);
