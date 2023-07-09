//의사코드
/*
0. 없는 값을 판별할 hash를 만든다.
1. s를 집합 단위로 잘라 배열 arrS을 만든다.
2. arrS의 길이만큼 0으로 채워진 배열 result를 만든다.
3. arrS의 각 요소의 문자열 길이를 기준으로 오름차순 정렬한다.
4. arrS를 순회하며
    4.1. arrS의 i번째 요소를 배열 arr로 만든다.
    4.2. arr의 각 요소 el이 hash에 없다면 
    - hash[el]=1 을 수행하고
    - result[i]=Number(el)을 수행한다.
5. result를 리턴한다.
*/
function solution(s) {
	const hash = {};
	const arrS = s.slice(2, -2).split(`},{`);
	const result = Array(arrS.length).fill(0);
	arrS.sort((a, b) => a.length - b.length);
	for (let i = 0; i < arrS.length; i++) {
		let arr = arrS[i].split(",");
		arr.forEach((el) => {
			if (hash[el] === undefined) {
				hash[el] = 1;
				result[i] = Number(el);
			}
		});
	}
	return result;
}
