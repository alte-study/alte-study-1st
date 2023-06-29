//의사코드
/*
0. 합계를 나타낼 sum을 선언한다 -> reduce를 사용하면 별도의 선언이 필요없음
1. absolutes를 순회하면서 같은 인덱스의 signs를 확인한다.
2. signs의 값이 false인 경우 현재 absolutes의 값에 -1을 곱한다. 아니라면 넘어간다.
3. signs의 값을 확인했다면 전체 합계에 더한다.
4. 전체 합계를 리턴한다.
*/
function solution(absolutes, signs) {
	return absolutes.reduce((acc, cur, idx) => {
		return signs[idx] ? acc + cur : acc + cur * -1;
	}, 0);
}
