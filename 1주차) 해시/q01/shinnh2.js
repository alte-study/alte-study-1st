function solution(nums) {
	//의사코드
	//0. hash, 최대값 max=nums.length/2;
	//1. nums를 순회하며 폰켓몬 종류를 키, 개수를 값으로 hash를 채운다.
	//2. hash의 키의 갯수를 확인한다.
	//3. 키의 갯수가 max보다 크다면 max를, 작다면 키의 갯수를 리턴한다.
	let hash = {};
	let max = nums.length / 2;
	nums.forEach((el) => {
		if (hash[el] === undefined) hash[el] = 1;
		else hash[el] += 1;
	});
	return Object.keys(hash).length > max ? max : Object.keys(hash).length;
}
