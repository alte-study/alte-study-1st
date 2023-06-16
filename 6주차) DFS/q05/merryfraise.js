/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/2644
 * Problem Number: 2644
 * Level: Silver II
 * Algorithm: 그래프 이론 / 그래프 탐색 / 너비 우선 탐색 / 깊이 우선 탐색
 */

const [N, question, M, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => (el.includes(' ') ? el.split(' ').map(Number) : +el));
const [start, target] = question;

/* pseudocode
   1. 가족 관계를 기입해둔 family 배열
   2. 방문 여부 체크를 위한 visited 배열
      2-1. 방문했다면 방문한 인덱스의 visited를 1로 변경
   3. 방문 순서 체크를 위한 stack
      3-1. 가장 첫 방문은 start 노드
      3-2. 현재 노드에서 갈 수 있는 경로들을 stack에 push
      3-3. stack에서 pop한 노드가 바로 다음 방문할 곳
   4. 현재 노드가 target 노드와 같다면 depth 출력
*/

const family = Array(N + 1)
  .fill()
  .map((_) => []);

for (const el of input) {
  family[el[0]].push(el[1]);
  family[el[1]].push(el[0]);
}

const DFS = (start, target) => {
  const visited = Array(N + 1).fill(0);

  const stack = [[start, 0]];

  while (stack.length) {
    const [cur, depth] = stack.pop();

    if (cur === target) return depth;

    if (!visited[cur]) {
      visited[cur] = 1;

      for (const el of family[cur]) {
        stack.push([el, depth + 1]);
      }
    }
  }

  return -1;
};

console.log(DFS(start, target));
