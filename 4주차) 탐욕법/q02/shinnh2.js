//의사코드
/*
0. 보트 boat, 보트 사용횟수 count
1. people을 먼저 무게가 낮은 순으로 정렬한다.
2. 가장 무거운 사람부터 boat에 태운다.
3. 현재 boat에 가장 가벼운 사람을 추가한 값이 limit를 넘었는지 아닌지 확인한다.
    3.1. 넘었다면 4번으로
    3.2. 아니라면 boat에 가벼운 사람을 추가한다.
4. count에 1을 더한다.
5. boat를 비운다.
6. 2부터 5번까지 과정을 people이 없을 때까지 반복한다.
7. count를 리턴한다. 
*/
function solution(people, limit) {
	let boat = [],
		count = 0;
	people.sort((a, b) => a - b);
	while (people.length) {
		boat.push(people.pop());
		if (boat[0] + people[0] <= limit) boat.push(people.shift());
		count++;
		boat = [];
	}
	return count;
}
