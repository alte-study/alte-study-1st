/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/1697
 * Problem Number: 1697
 * Level: Silver I
 * Algorithm: 그래프 이론 / 그래프 탐색 / 너비 우선 탐색
 */

const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

/* pseudocode
   1. 시작 노드와 현재 깊이를 queue에 할당
   2. 노드를 방문했는지 확인하기 위한 배열 visited을 0으로 채움
   3. queue의 맨 앞 요소를 현재 위치 노드인 cur, 현재 깊이인 depth로 구조 분해
   4. 현재 노드가 방문한 적 있는 곳이라면 패스
   5. 방문한 적이 없는 곳이라면 방문한 것으로 변경
   6. 현재 노드가 찾고자하는 노드(K)와 동일하다면 노드의 깊이를 반환
   7. 현재 노드에서 이동가능한 위치들을 depth와 함께 queue에 저장
*/

const bfs = (N) => {
  const queue = [[N, 0]];
  const visited = Array(100001).fill(0);

  while (queue.length) {
    const [cur, depth] = queue.shift();

    // 현재 노드를 방문한 적 있으면 패스
    if (visited[cur]) continue;

    // 없으면 방문한 것으로 변경
    visited[cur] = 1;

    // 현재 노드가 찾고자하는 노드와 동일하다면 노드의 깊이를 반환
    if (cur === K) return depth;

    // X - 1, X + 1, 2 * X에 해당하는 위치를 queue에 저장 (방문해야 하는 곳)
    for (const next of [cur + 1, cur - 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        queue.push([next, depth + 1]);
      }
    }
  }
};

console.log(bfs(N));
