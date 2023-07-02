//의사코드
/*
1. 길이가 10인 배열 arr을 요소를 모두 0으로 채워 선언한다.
2. numbers를 순회하며 해당 숫자를 인덱스로 arr[인덱스]의 값을 1로 바꾼다.
3. arr을 순회하며 값이 0인 요소들을 더한다.
4. 최종 합을 리턴한다.
*/
function solution(numbers) {
	const arr = Array(10).fill(0);
	numbers.forEach((el) => (arr[el] = 1));
	return arr.reduce((acc, cur, idx) => acc + (cur ? 0 : idx), 0);
}
