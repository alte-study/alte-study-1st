//의사코드
/*
0. 개념
- LRU 알고리즘: 가장 최근에 사용하지 않은 데이터부터 삭제
- Cache hit: 데이터가 캐시에 존재 -> 1초
- Cache miss: 데이터가 캐시에 존재하지 않음 -> 5초
1. 캐시가 될 배열 cache, 실행시간을 누적할 time=0을 생성한다.
2. cities를 순회하며
    2.1. 대소문자를 구분하지 않으므로 현재 요소를 소문자로 변환한다.
    2.2. 배열 cache에 현재 요소를 찾아 인덱스를 기억한다. (단 캐시사이즈는 0보다 커야 한다.) 있다면
        - cache hit이므로 time에 1을 추가한다.
        - cache배열에서 해당 요소를 마지막으로 이동한다.
    2.3. 배열 cache에 현재 요소가 없다면 
        - cache miss이므로 time에 5를 추가한다.
        - 만약 cache의 사이즈가 cacheSize보다 같거나 크다면 cache의 첫번째 요소를 삭제한다.
        - 현재 요소를 배열 cache의 마지막에 삽입한다.
3. time을 리턴한다.
*/
function solution(cacheSize, cities) {
	let cache = [];
	let time = 0;
	for (let city of cities) {
		city = city.toLowerCase();
		let cityIdx = cache.indexOf(city);
		if (cacheSize && cityIdx !== -1) {
			time = time + 1;
			cache.splice(cityIdx, 1);
		} else {
			time = time + 5;
			if (cache.length >= cacheSize) cache.shift();
		}
		cache.push(city);
	}
	return time;
}
