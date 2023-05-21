let [N, ...input] = require("fs")
	.readFileSync("./1966.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); // ./1966.txt /dev/stdin

let arr = [];
while (input.length) {
	arr.push(input.splice(0, 2));
}

//의사코드
/*
0.
찾아야 하는 문서번호 target, 총 문서개수 length
각 테스트의 중요도 배열 pq: 예) [1 1 9 1 1 1]
문서번호 배열 dn(0부터 pq개수만큼 생성): [0 1 2 3 4 5]
실제 출력된 문서 printed: []

출력방법: 
1. pq를 앞에서부터 살펴보면서, 현재 문서보다 중요도가 높은 문서가 pq에 존재한다면:
현재 문서를 pq의 뒤로 보낸다.
dn에서도 순서를 똑같이 맞춰준다.
2. 현재 문서보다 중요도가 높은 문서가 없다면:
pq와 dn에서 각각 문서를 제외시켜 주고(shift)
이 문서는 출력되었으므로 printed에 dn에서 삭제한 문서번호를 삽입한다.(push) 
3. printed의 마지막 문서가 구하려는 문서 번호인지 확인하고
맞다면 모두 멈추고 현재 printed의 개수를 리턴하고
아니라면 계속한다.
4. 1-3을 pq의 요소가 없을 때까지 반복한다.
*/

function solution(target, length, pq) {
	target = +target;
	let dn = Array.from({ length: +length }, (v, i) => i);
	let printed = [];
	while (pq.length) {
		if (findHigh(pq[0], pq)) {
			pq.push(pq.shift());
			dn.push(dn.shift());
		} else {
			pq.shift();
			printed.push(dn.shift());
		}
		if (printed[printed.length - 1] === target) return printed.length;
	}
	return printed.length;
}

//가장 높은 중요도 찾기 함수
function findHigh(nowTarget, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > nowTarget) {
			return true;
		}
	}
	return false;
}

let result = arr.map((el) => {
	let [length, target] = el[0].split(" ");
	let pq = el[1].split(" ").map((el) => +el);
	return solution(target, length, pq);
});

console.log(result.join("\n"));
