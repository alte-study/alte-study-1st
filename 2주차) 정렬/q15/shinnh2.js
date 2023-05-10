let [K, A] = require("fs")
	.readFileSync("./23882.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); // ./23882.txt /dev/stdin

K = +K.split(" ")[1];
A = A.split(" ").map((el) => +el);

//의사코드
//0. 목표: A[1..N]을 오름차순 정렬한다.
//1. A[1..last]중 가장 큰 수 A[i]를 찾는다
//2. last와 i가 서로 다르면 A[last]와 A[i]를 교환
//3. 1~2과정이 끝나면 A가 K번 교환했는지 확인한다.
//4. K번 교환했다면 그 즉시 A를, 정렬이 끝났다면 -1을 리턴한다.

const solution = () => {
	let count = 0;
	for (let i = A.length - 1; i >= 0; i--) {
		let largest = i;
		for (let j = i - 1; j >= 0; j--) {
			if (A[largest] < A[j]) largest = j;
		}
		if (largest !== i) {
			[A[largest], A[i]] = [A[i], A[largest]];
			count++;
			if (count === K) return A.join(" ");
		}
	}
	return -1;
};
console.log(solution());
