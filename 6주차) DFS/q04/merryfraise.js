/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/24480
 * Problem Number: 24480
 * Level: Silver II
 * Algorithm: 그래프 이론 / 그래프 탐색 / 정렬 / 깊이 우선 탐색
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
      2-1. 방문 여부를 체크하면서 동시에 방문 순서인 order를 기입
      2-2. visited[Root - 1]에 order를 지정한 뒤 order를 증가시킴 (다음 순서를 위해)
      2-3. 만약 Root에 연결된 정점의 visited가 0이라면 그 정점에 대해 DFS를 시행
   3. visited를 한 줄씩 리턴
*/

const edges = Array(N + 1)
  .fill()
  .map((_) => []);

for (const el of input) {
  edges[el[0]].push(el[1]);
  edges[el[1]].push(el[0]);
}

edges.forEach((el) => el.sort((a, b) => b - a));

const visited = Array(N).fill(0);
let order = 1;

const DFS = (Root) => {
  visited[Root - 1] = order++;

  for (const el of edges[Root]) {
    if (!visited[el - 1]) DFS(el);
  }
};

DFS(R);

console.log(visited.join('\n'));
