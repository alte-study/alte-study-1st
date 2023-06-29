//의사코드
/*
0. 문자별 최소 키 횟수를 저장할 hash
1. keymap을 순회하며 각 문자열의 최소 숫자를 저장한다.
    1.1. 현재 요소의 문자열을 순회하며 hash에 문자의 횟수를 저장한다.
    1.2. 만약 요소가 hash에 이미 존재한다면 비교하여 더 작은 값을 저장한다.
2. target을 순회하면서 각 문자를 누르는 최소 횟수를 저장한다.
    2.0. 횟수 count가 필요하다.
    2.1. 각 요소의 문자열을 순회하며 hash에 값이 있다면 count에 더한다.
    2.2. 만약 hash에 없는 문자가 나온다면 즉시 멈추고 해당요소는 작성할 수 없으므로 -1을 반환한다.
3. target을 순회하며 판별한 횟수들을 배열 형태로 리턴한다.
*/
function solution(keymap, targets) {
	let hash = {};
	keymap.forEach((el) => {
		for (let i = 0; i < el.length; i++) {
			if (hash[el[i]] < i + 1) continue;
			hash[el[i]] = i + 1;
		}
	});
	return targets.map((el) => {
		let count = 0;
		for (let char of el) {
			if (hash[char] === undefined) return -1;
			count = count + hash[char];
		}
		return count;
	});
}
