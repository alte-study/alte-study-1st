/**
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net/problem/11060
 * Problem Number: 11060
 * Level: Silver II
 * Algorithm: 다이나믹 프로그래밍 / 그래프 이론 / 그래프 탐색 / 너비 우선 탐색
 */

const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const maze = input[0].split(' ').map((el) => +el);

/* pseudocode
   1. 방문 여부 따지기 위한 배열 visited
      1-1. 방문 했다면 방문한 인덱스의 visited는 1로 변경
   2. 방문 순서 따지기 위한 queue
      2-1. 가장 첫 방문은 미로의 1번 칸
      2-2. 현재 노드를 방문한 경험이 없다면 queue에 방문할 노드 push
   3. 만약 현재 노드가 미로의 마지막 칸이라면 depth 출력
*/

const BFS = (N) => {
  const visited = Array(N + 1).fill(0);

  const queue = [[1, 0]];

  while (queue.length) {
    const [cur, depth] = queue.shift();
    const curMaze = maze[cur - 1];

    if (cur === N) return depth;

    if (!visited[cur]) {
      visited[cur] = 1;

      if (curMaze) {
        for (let i = 1; i <= curMaze; i++) {
          queue.push([cur + i, depth + 1]);
        }
      }
    }
  }

  return -1;
};

console.log(BFS(+N));
