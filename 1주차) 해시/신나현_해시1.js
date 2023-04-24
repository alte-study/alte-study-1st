function solution(participant, completion) {
	//의사코드
	//0. 해시테이블을 만든다.
	//1. 참가자를 조회하면서, 키로 해시테이블에 값을 -1로 저장한다.
	// > 만약 동명이인이 있다면 -1을 더한다.
	//2. 완주자를 조회하면서, 해당 키가 있다면 값에 +1한다.
	//3. hash에서 값이 -1인 키를 찾아 리턴한다.
	let hash = {};
	for (let el of participant) {
		if (hash[el] === undefined) hash[el] = -1;
		else hash[el] += -1;
	}
	for (let el of completion) {
		if (hash[el] !== undefined) hash[el] += 1;
	}
	return Object.keys(hash).find((el) => hash[el] === -1);
}
