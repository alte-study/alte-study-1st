/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/24445
 * Problem Number: 24445
 * Level: Silver II
 * Algorithm: 그래프 이론 / 그래프 탐색 / 정렬 / 너비 우선 탐색
 */

const [inform, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));
const [N, M, R] = inform;

/* pseudocode
   1. 무방향 그래프 edges
      1-1. 간선 정보를 각 인덱스에 맞게 push
      1-2. 이 때, 무방향이므로 양방향 모두 push 해야 함
      1-3. 내림차순으로 방문하기 때문에 각 그래프를 내림차순 정렬
   2. 방문 여부 체크를 위한 visited 배열
      2-1. 방문 여부를 체크하면서 동시에 방문 순서를 기입
      2-2. Root 노드는 첫 번째로 방문하기 때문에 1로 지정
   3. 방문 순서 체크를 위한 queue
      3-1. queue의 맨 앞에 있는 노드를 방문
      3-2. 현재 노드에서 갈 수 있는 노드들을 탐색
      3-3. 방문 가능한 노드가 방문한 적이 없다면 그 노드의 방문 순서를 기입한 뒤,
           순서를 +1 해주고 방문할 수 있도록 queue에 push
   4. visited를 한 줄씩 리턴
*/

const edges = Array(N + 1)
  .fill()
  .map((_) => []);

for (const el of input) {
  edges[el[0]].push(el[1]);
  edges[el[1]].push(el[0]);
}

edges.forEach((el) => el.sort((a, b) => b - a));

const BFS = (Edges, Root) => {
  const visited = Array(N).fill(0);
  let order = 1;

  visited[Root - 1] = order++;

  const queue = [];
  queue.push(Root);

  while (queue.length) {
    const cur = queue.shift();

    for (const el of Edges[cur]) {
      if (!visited[el - 1]) {
        visited[el - 1] = order++;
        queue.push(el);
      }
    }
  }

  return visited.join('\n');
};

console.log(BFS(edges, R));
