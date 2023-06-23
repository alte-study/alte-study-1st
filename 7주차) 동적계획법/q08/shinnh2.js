//의사코드
/*
0. 각 인덱스날짜'까지'의 최대수익을 기록할 배열 max가 필요하다. max를 정해진 상담을 N+1만큼 0으로 채워 생성한다.
N이 아니고 N+1인 이유는: 상담마지막날의 수익이 아닌, 상담 마지막날까지 상담을 끝내고 받은 수익까지 계산하기 위해서이다.
일은 N일까지, 정산은 N일까지 일해야 받으므로!
1. max의 각 i번째요소를 순회하며 최대수익을 계산한다. 
2. i번째날 상담을 하게되면, 이후 상담이 가능한 날짜는 'i+(i의 상담기간)'번째~마지막인 N날까지다. (일한 날까지 계산)
따라서 최대수익은 'i+(i의 상담기간)'번째~마지막날 끝나고 정산받는 날인 N+1까지 j로 순회한다.
  2.1. 이 때 j날까지의 최대수익은 (i번째날까지의 최대수익)에 i번째날의 상담이 끝났으므로 i번째날의 상담수익을 더해야 한다.
  2.2. 기존 j날까지의 최대수익과 비교해 '(i번째날까지의 최대수익)+(i번째날의 상담비용)'이 크다면, 그 값으로 갱신하여 max[j]에 저장한다.
3. 정답은 마지막날'끝났을 때까지'의 최대수익을 구하는 것이므로 max의 마지막 값을 리턴한다.
*/
let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

input = input.map((el) => el.split(" ").map((el) => +el));
N = +N;
const max = Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
	let [period, cost] = input[i];
	for (let j = i + period; j < N + 1; j++) {
		if (max[j] < max[i] + cost) max[j] = max[i] + cost;
	}
}
console.log(max[N]);
