//의사코드
/*
0. 필요한 변수
- p: 미로를 나타낼 2차원 배열 
- visited: 방문여부와 최단거리를 나타낼 p와 길이가 같은 2차원 배열
- queue=[[0,0]]: 갈 수 있는 길을 나타낼 배열. 초기값 시작점 좌표[행, 열]
1. 아래의 작업을 queue의 값이 없을 때까지 반복한다.
  1.1. queue앞의 것을 삭제하여 현재 좌표 curR, curC로 삼는다.
  1.2. 현재 좌표의 상하좌우를 확인하여 갈 수 있는 길인지 확인한다.
  1.3. 갈수있는 길은 현재 좌표의 최단거리(visited에 기록되어있음)에 +1하여 갈 수 있는 길의 visited 좌표에 저장하고, queue에 삽입한다.
2. 반복문이 종료되면 더 이상 갈 수 있는 길이 없으므로 p[N,M]의 값을 리턴하고 종료한다.
*/

//코드 수정 전
/*
let [nm, ...p] = require("fs")
	.readFileSync("./2178.txt")
	.toString()
	.replace(/\r/g, "")
	.trim()
	.split("\n"); // ./2178.txt /dev/stdin
const [N, M] = nm.split(" ").map((el) => +el);
p = p.map((el) => el.split("").map((el) => +el));

const queue = [[0, 0, 0]];
const r = [-1, 1, 0, 0];
const c = [0, 0, -1, 1];
while (queue.length) {
	let [curR, curC, prev] = queue.shift();
	p[curR][curC] = prev + 1;
	if (curR === N - 1 && curC === M - 1) break;
	for (let i = 0; i < 4; i++) {
		let nextR = curR + r[i];
		let nextC = curC + c[i];
		if (nextR < 0 || nextR > N - 1 || nextC < 0 || nextC > M - 1) continue;
		if (p[nextR][nextC] === 1) queue.push([nextR, nextC, p[curR][curC]]);
	}
}
console.log(p[N - 1][M - 1]);
*/

//코드 수정 후
let [nm, ...p] = require("fs")
	.readFileSync("./2178.txt")
	.toString()
	.replace(/\r/g, "")
	.trim()
	.split("\n"); // ./2178.txt /dev/stdin
const [N, M] = nm.split(" ").map((el) => +el);
p = p.map((el) => el.split("").map((el) => +el));
const visited = Array.from({ length: N }, () => Array(M).fill(0));
visited[0][0] = 1;

const queue = [[0, 0]];
const r = [-1, 1, 0, 0];
const c = [0, 0, -1, 1];
while (queue.length) {
	let [curR, curC] = queue.shift();
	for (let i = 0; i < 4; i++) {
		let [nextR, nextC] = [curR + r[i], curC + c[i]];
		if (nextR < 0 || nextR > N - 1 || nextC < 0 || nextC > M - 1) continue;
		if (p[nextR][nextC] && !visited[nextR][nextC]) {
			visited[nextR][nextC] = visited[curR][curC] + 1;
			queue.push([nextR, nextC]);
		}
	}
}
console.log(visited[N - 1][M - 1]);
