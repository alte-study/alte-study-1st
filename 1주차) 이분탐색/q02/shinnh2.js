/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	//의사코드
	//0. 인덱스 lowIndex=0, highIndex=letters.length-1, 찾으려는 인덱스를 resultIndex 로 생성
	//1. midIndex를 계산한다. (midIndex=Math.floor(lowIndex+highIndex/2))
	//2. target값을 판별한다.
	//  2.1. target이 midIndex과 같다면 letters[midIndex+1]을 리턴한다.(다만 리턴시 마지막값이라면 0번째 값 리턴)
	//  2.2. target이 midIndex보다 작다면 highIndex를 midIndex-1로 갱신
	//  2.3. target이 midIndex보다 크다면 lowIndex를 midIndex+1로 갱신
	//3. 1~2번을 lowIndex가 highIndex보다 같거나 커질 때까지 반복
	//4. 3번이 끝났다면 target과 일치하는 값이 없고 남은 값 중 제일 작은 값이 필요하므로 lowIndex를 리턴해야 한다.
	//5. lowIndex의 값을 판별한다:
	//  4.1. lowIndex의 값이 마지막이라면 0번째 요소를 리턴한다.
	//  4.2. 아니라면 그대로 리턴한다.
	let lowIndex = 0;
	let highIndex = letters.length - 1;
	while (lowIndex <= highIndex) {
		let midIndex = Math.floor((lowIndex + highIndex) / 2);
		if (target === letters[midIndex]) {
			if (letters[midIndex + 1] === target) {
				lowIndex = midIndex + 1;
				continue;
			}
			return letters[midIndex + 1] === undefined
				? letters[0]
				: letters[midIndex + 1];
		} else if (target < letters[midIndex]) highIndex = midIndex - 1;
		else if (target > letters[midIndex]) lowIndex = midIndex + 1;
	}
	return letters[lowIndex] === undefined ? letters[0] : letters[lowIndex];
};
