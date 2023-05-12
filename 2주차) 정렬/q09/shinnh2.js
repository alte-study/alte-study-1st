let [K, input] = require("fs")
	.readFileSync("./24090.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); // ./24090.txt /dev/stdin

K = Number(K.split(" ")[1]);
input = input.split(" ").map((el) => +el);

/* 의사코드
** 목표: A[p..r]을 오름차순 정렬하면서, K번째 교환되는 수를 찾는다. 
1.  l 초기값 0, r 초기값 A의 길이-1, 현재 교환수 count, 정답 answer='';
2. l보다 r이 작은 경우 아래 과정을 수행한다:
  2.1. pivotIdx를 구한다. (pivot함수 활용, 전달인자로 A, l, r).
  2.2. pivotIdx를 기준으로 왼쪽 부분을 정렬한다.(재귀) : (A, l, pivotIdx - 1)
  2.3. pivotIdx를 기준으로 오른쪽 부분을 정렬한다. (재귀) : (A, pivotIdx + 1, r)
3. A를 리턴한다.
4. pivot함수: 전달인자 배열A, start, end 지점
  4.1. 기준원소 x: 배열 A[end]
  4.2. i : start-1
  4.3. start부터 end-1까지 반복하되(j)
    > A[j]<=A[end]라면: 
    i값을 증가시키고
    A[i]와 A[j]를 바꾼다. 
    (교환발생) count++ 한 뒤, K와 비교하여 같다면 answer에 A[i], A[j]중 작은값부터 넣는다.
  4.4. i+1 과 end 가 다르다면 : 
    A[i+1]과 A[end]를 교환한다.
    (교환발생) count++ 한 뒤, K와 비교하여 같다면 answer에 A[i], A[j]중 작은값부터 넣는다.
  4.5. i+1을 리턴한다.
5. answer를 문자열로 리턴한다.
*/
let count = 0;
let answer = "";

function checkSwap(a, b) {
	if (count === K) {
		a < b ? (answer = `${a} ${b}`) : (answer = `${b} ${a}`);
	}
}
function pivot(A, start, end) {
	let i = start - 1;
	for (let j = start; j < end; j++) {
		if (A[j] <= A[end]) {
			i++;
			[A[i], A[j]] = [A[j], A[i]];
			count++;
			checkSwap(A[i], A[j]);
		}
	}
	if (A[i + 1] !== A[end]) {
		[A[i + 1], A[end]] = [A[end], A[i + 1]];
		count++;
		checkSwap(A[i + 1], A[end]);
	}
	return i + 1;
}
function quickSort(arr, l = 0, r = arr.length - 1) {
	if (l < r) {
		let pivotIdx = pivot(arr, l, r);
		quickSort(arr, l, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, r);
	}
	return arr;
}

quickSort(input);
if (answer === "") answer = "-1";
console.log(answer);
