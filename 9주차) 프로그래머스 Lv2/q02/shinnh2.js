//의사코드
/*
0. 귤 크기별 개수를 담을 객체 hash, 가짓수를 저장할 count=0, 누적 귤 개수를 저장할 sum=0
1. tangerine을 순회하며 귤 크기를 키, 개수를 값으로 hash를 채운다.
2. hash의 개수를 담은 배열 arr을 만든다.
3. arr을 내림차순 정렬한다.
4. arr을 순회하며
    4.1. count에 1을 추가한다.
    4.2. 현재 귤 개수가 k와 같거나 크다면 끝낸다.
    4.3. 귤 개수를 sum에 저장한다. 
    4.4. sum이 k보다 같거나 크다면 끝낸다.
5. count를 리턴한다.
*/
function solution(k, tangerine) {
	const hash = {};
	let count = 0,
		sum = 0;
	tangerine.forEach(
		(el) => (hash[el] = hash[el] === undefined ? 1 : hash[el] + 1)
	);
	const arr = Object.values(hash);
	arr.sort((a, b) => b - a);
	for (let el of arr) {
		count++;
		if (el >= k) break;
		sum += el;
		if (sum >= k) break;
	}
	return count;
}
