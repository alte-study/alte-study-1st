let input = require("fs")
	.readFileSync("./10815.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); //   /dev/stdin

//0. 찾아야하는 카드 목록 listN, 전체 카드 목록 listM, 찾는 함수 bs
//1. 카드를 찾는 이분탐색 함수 bs를 생성한다.
//  1.1. 함수의 입력값을 받아 listN에 존재하는지 이분탐색으로 찾는다
//  1.2. 함수는 값이 있다면 1을, 없다면 0을 리턴한다
//2. 전체 카드 목록 listM을 순회하며 해당 카드가 listN에 있는지 확인하고,
//  2.1. 각 요소를 전달인자로 bs함수의 결과를 반환값으로 목록을 대체한다.
//3. 결과로 대체된 목록을 형식에 맞게 리턴한다.

let [n, listN, m, listM] = input;
listN = listN
	.split(" ")
	.map((el) => +el)
	.sort((a, b) => a - b);
listM = listM.split(" ").map((el) => +el);

const bs = (arr, value) => {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (arr[mid] === value) return 1;
		if (arr[mid] < value) low = mid + 1;
		else if (arr[mid] > value) high = mid - 1;
	}
	return 0;
};
console.log(listM.map((el) => bs(listN, el)).join(" "));
