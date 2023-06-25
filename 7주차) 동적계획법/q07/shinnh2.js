//의사코드
/*
0. 아파트 거주민을 나타내는 이차원 배열 apt를 입력값의 최대로 만들고, apt[0][0]=1로 설정한다. (0층 1호는 apt[0][0], a층의 b호는 apt[a][b-1])
1. a층의 b호에 사는 사람 수는 apt[a-1]배열의 0번째 인덱스부터 b-1까지의 합, 즉 '같은 층 왼쪽 호수+아래층 같은 호수'이다. 
2. 이를 재귀함수 helper(층, 호수)를 사용해 나타낸다:
	2.1. a가 0보다 작거나 b가1보다 작으면 유효하지 않으므로 함수를 종료한다. 
	2.2. apt[층][호수-1]이 있는지 확인하여 없으면 아래와 같이 구한다.
  2.3. 0층 b호인 경우 apt[0][b-1]=b명이다.
  2.4. 1층 이상 b호인 경우 apt[a][b-1]=apt[a][b-2]+apt[a-1][b-1]로 구한다. 
	(주의: apt[a][b-1]을 구하려면 helper(a, b)를 호출해야 한다.)
	2.4. apt[a][b-2]의 값이 없다면  helper(a, b-2)를 사용해 구한다.
	2.5. apt[a-1][b-1]의 값이 업다면 helper(a-1, b-1)를 사용해 구한다.
3. 입력값을 helper함수로 변환하여 알맞게 출력한다.
*/

let [T, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let maxA = 0;
let maxB = 1;
input = input
	.map((el, i) => {
		if (i % 2 === 0) {
			if (maxA < +el) maxA = +el;
			if (maxB < +input[i + 1]) maxB = +input[i + 1];
			return [+el, +input[i + 1]];
		}
		return;
	})
	.filter((el) => el !== undefined);

const apt = Array.from({ length: maxA + 1 }, () => Array(maxB + 1).fill(0));
apt[0][0] = 1;
const helper = (a, b) => {
	if (a < 0 || b < 1) return 0;
	if (!apt[a][b - 1]) {
		if (a === 0) apt[0][b - 1] = b;
		else apt[a][b - 1] = helper(a, b - 1) + helper(a - 1, b);
	}
	return apt[a][b - 1];
};

let result = input.map((el) => helper(el[0], el[1]));
console.log(result.join("\n"));
