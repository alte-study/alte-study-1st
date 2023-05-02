//의사코드
//0. 출입기록 객체 commuteRecord
//1. workers를 순회하며 commuteRecord 객체에 직원명 키, 출퇴근 여부를 값으로 할당한다.
//2. 만들어진 commuteRecord 객체의 키로 배열을 만들고, 해당 배열을 키-값이 enter인 경우만을 추출한다.
//3. 2번을 역순으로 만들어 리턴한다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [length, ...workers] = input;
let commuteRecord = {};
for (let el of workers) {
	let [key, value] = el.split(" ");
	commuteRecord[key] = value;
}
console.log(
	Object.keys(commuteRecord)
		.filter((el) => commuteRecord[el] === "enter")
		.sort()
		.reverse()
		.join("\n")
);
