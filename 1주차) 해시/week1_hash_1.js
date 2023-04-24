function solution(participant, completion) {
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
