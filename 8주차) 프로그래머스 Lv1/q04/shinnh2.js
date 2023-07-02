//의사코드
/*
0. 다음의 변수들이 필요하다.
- 지표가 들어있는 객체 indicator(키는 지표, 값은 점수-초기값0)
- 점수를 계산할 수 있는 배열 calc=[3,2,1,0,1,2,3]
- 성격유형을 저장할 result
1. survey를 순회하면서 choices의 점수를 확인하고, calc를 이용해 계산한다.
    1.1. survey의 요소를 반으로 나누고, 
    1.2. 이에 대응하는 choices 요소의 점수가 
    > 4보다 작으면 survey의 첫번째 문자와 이에 대응하는 calc의 점수를 더하여 indicator에 저장한다.
    > 4보다 크면 survey의 두번째 문자와 이애 대응하는 calc의 점수를 더하여 indicator에 저장한다.
2. 점수를 토대로 성격유형을 생성한다.
    2.1. indicator.R과 indicator.T가 같다면 result에 R을 삽입한다.
    > 아니라면 R이 클 경우 R을, T가 크다면 T를 삽입한다.
    2.2. indicator.C와 indicator.F가 같다면 result에 C를 삽입한다.
    > 아니라면 C가 클 경우 C를, F가 크다면 F를 삽입한다.
    2.3. indicator.J와 indicator.M가 같다면 result에 J을 삽입한다.
    > 아니라면 J가 클 경우 J를, M이 크다면 M을 삽입한다.
    2.4. indicator.A와 indicator.N이 같다면 result에 A를 삽입한다.
    > 아니라면 A가 클 경우 A를, N이 크다면 N을 삽입한다.     
3. result를 리턴한다.
*/
function solution(survey, choices) {
	const indicator = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
	const calc = [3, 2, 1, 0, 1, 2, 3];
	let result = "";
	for (let i = 0; i < survey.length; i++) {
		if (choices[i] === 4) continue;
		let [c1, c2] = survey[i].split("");
		if (choices[i] < 4) indicator[c1] = indicator[c1] + calc[choices[i] - 1];
		else if (choices[i] > 4)
			indicator[c2] = indicator[c2] + calc[choices[i] - 1];
	}
	const checkType = (i1, i2) => {
		if (indicator[i1] === indicator[i2]) result += [i1];
		else result += indicator[i1] > indicator[i2] ? [i1] : [i2];
	};
	checkType("R", "T");
	checkType("C", "F");
	checkType("J", "M");
	checkType("A", "N");
	return result;
}
