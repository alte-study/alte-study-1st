let input = require("fs")
	.readFileSync("./17219.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); //   /dev/stdin

//의사코드
//0. 찾아야할 비번 목록 target, 전체 메모 목록 siteNlist, 비번 목록 해시 pwHash
//1. 전체 메모 목록 siteNlist을 순회하면서 비번 목록 pwHash를 만든다.
//2. target을 순회하며 pwHash에서 비번을 찾는다.
//3. 찾은 비번을 알맞은 형태로 리턴한다.
let [lengthN, lengthM] = input[0].split(" ");
let target = input.splice(Number(lengthN) + 1, Number(lengthM));
let siteNlist = input.splice(1, Number(lengthN));
let pwHash = {};

for (let el of siteNlist) {
	let [key, value] = el.split(" ");
	pwHash[key] = value;
}
console.log(target.map((el) => pwHash[el]).join("\n"));
