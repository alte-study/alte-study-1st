//의사코드
/*
0. 거슬러줄 동전의 개수 count=0 선언
1. 거슬러줄 돈 change를 구한다.
2. 잔돈단위를 가장 큰 순서대로 배열에 담아 coins를 만든다.
3. 거슬러줄 돈 change를 coins의 가장 큰 잔돈으로 나눠 내림한다. 
이것이 곧 잔돈개수이므로 count에 추가한다.
ex) 1200/500이면 500짜리 2개, 200이 남는다. 이 때 잔돈개수 2개가 생겼다.
4.  남은 거슬러 줄 돈으로 change를 갱신한다. 거슬러준 돈을 현재 잔돈으로 나머지 연산을 통해 구한다.
5. 3~4번을 coins만큼 반복하되, 처음에 change가 0인지 확인하여 맞다면 그만두도록 한다.
6. count를 리턴한다.
*/

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.replace(/\r/g, "");

let count = 0;
let change = 1000 - Number(input);
const coins = [500, 100, 50, 10, 5, 1];
for (let coin of coins) {
	if (change === 0) break;
	count += Math.floor(change / coin);
	change = change % coin;
}
console.log(count);
