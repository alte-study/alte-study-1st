/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/18352
 * Problem Number: 18352
 * Level: Silver II
 * Algorithm: 그래프 이론 / 그래프 탐색 / 너비 우선 탐색 / 테이크스트라
 */

const [inform, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));
const [N, M, K, X] = inform;

/* pseudocode
   1. 단방향 그래프 생성 (graph)
   2. 현재 위치를 큐에 담아 현재 위치와 시작 노드로부터의 거리를 판별
      2-1. 동일하다면 결과에 현재 위치를 추가하고 다음 큐로 이동
      2-2. 동일하지 않으면 현재 노드에서 갈 수 있는 노드를 큐에 추가
   3. 현재 노드에서 갈 수 있는 노드에 거리 정보가 없다면 (해당 노드에 방문한 적이 없다는 뜻)
      3-1. 큐에 다음 방문할 노드를 추가하고 거리를 현재 노드 + 1로 설정 (현재 노드의 다음 위치이므로)
*/

const graph = Array(N)
  .fill()
  .map((_) => []);
input.forEach(([start, next]) => graph[start - 1].push(next - 1));

const result = [];

const bfs = (start) => {
  const queue = [start - 1];
  const distance = Array(N).fill(0);
  // 시작 노드를 0으로 초기화하면 시작 노드로 돌아갈 수 있음..ㅋㅋ
  distance[start - 1] = 1;

  while (queue.length) {
    const cur = queue.shift();

    // 현재 노드의 거리가 시작 노드로부터의 거리와 같은 경우
    if (distance[cur] === K + 1) {
      result.push(cur + 1);
      continue;
    }

    // 단방향 그래프에서 현재 노드로부터 갈 수 있는 노드들
    for (const next of graph[cur]) {
      if (!distance[next]) {
        queue.push(next);
        distance[next] = distance[cur] + 1;
      }
    }
  }
};

bfs(X);

console.log(result.length ? result.sort((a, b) => a - b).join('\n') : -1);
