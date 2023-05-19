let [n, k] = require("fs")
	.readFileSync("./1158.txt")
	.toString()
	.trim()
	.split(" "); // ./1158.txt /dev/stdin

//의사코드
/*
  0. 1부터 인원수까지를 담음 배열 circle, 
    제거된 사람이 순서대로 담긴 큐 ys, 
    제거될 순서 i(초기값은 0)
  1. circle에서 제거될 사람의 순서는 
    i=(이전i-1+input[1])%현재 circle의 길이
  2. circle[i]번째 값을 ys에 넣는다.
  3. circle에서 circle[i]를 삭제한다.
  4. 1~3을 circle의 길이가 0이 될 때까지 반복한다.
*/
let circle = Array.from({ length: +n }, (v, i) => i + 1);
k = +k;
let ys = [];
let i = 0;

while (circle.length > 0) {
	i = (i - 1 + k) % circle.length;
	ys.push(circle[i]);
	circle.splice(i, 1);
}
console.log(`<${ys.join(", ")}>`);
