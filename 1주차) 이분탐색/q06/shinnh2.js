let [n, list, maxTotal] = require("fs")
	.readFileSync("./2512.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); //   /dev/stdin

//0. 예산 목록 list, 예산 총합의 최대값 maxTotal, 예산 총합 total, 최대 예산 result,
//예산 판별시: 예산의 최소값 low, 예산 최대값 high, 중간값 mid
//1. 예산의 최소값 low는 0, 예산 최대값 high는 전체 예산 list 중에서 가장 큰 값으로 시작한다.
//2. low+high를 반으로 나눈 최소값을 mid로 정한다.
//3. list의 각 예산들을 순회하며 total을 계산한다
//  3.1. list의 각 요소가 mid를 넘는다면 total에 mid를 더하고
//  3.2. 아니라면 각 요소의 원래 값을 더한다.
//4. total이 maxTotal을
//  4.1. 넘지 않거나 같다면 low=mid+1로 갱신하고 result에 mid를 할당한다.
//  4.2. 아니라면 high=mid-1로 갱신한다.
//5. 2~4를 low가 high보다 같거나 작을 동안 반복한다.
//6. result를 반환한다.

list = list.split(" ").map((el) => +el);
maxTotal = Number(maxTotal);
let result = 0;
let low = 0;
let high = Math.max(...list);
while (low <= high) {
	let total = 0;
	let mid = Math.floor((low + high) / 2);
	for (let el of list) {
		if (el > mid) total += mid;
		else total += el;
	}
	if (total <= maxTotal) {
		result = mid;
		low = mid + 1;
	} else {
		high = mid - 1;
	}
}
console.log(result);
