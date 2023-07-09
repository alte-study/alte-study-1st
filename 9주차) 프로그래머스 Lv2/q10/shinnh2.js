//의사코드
/*
* A에서 제일 작은 값 X B에서 최대한 큰 값 순으로 곱하면 누적합이 최소가 된다.
1. A를 오름차순 정렬한다.
2. B를 내림차순 정렬한다.
3. A의 각 요소에 B의 같은 인덱스에 해당하는 요소를 곱하고, 그 누적합을 구한다.
4. 누적합을 리턴한다.
*/
function solution(A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);
	return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}
