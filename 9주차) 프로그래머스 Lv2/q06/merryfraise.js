/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 * Problem Number: 17680
 * Level: 2
 * Algorithm: 2018 KAKAO BLIND RECRUITMENT
 */

/* pseudocode
   1. cacheSize가 0이라면 모두 cache miss
   2. 대소문자 구별이 없으므로 전부 소문자 처리
   3. cache miss일 경우 (현재 요소가 cache 내에 없음)
      3-1. cacheArr이 cacheSize보다 작을 경우 배열의 맨 뒤에 push
      3-2. cacheArr이 cacheSize인 경우 맨 앞 요소를 제거하고 맨 뒤에 push
      3-3. cache miss 시간을 더해줌
   4. cache hit일 경우 (현재 요소가 cache 내에 있음)
      4-1. cacheArr 내의 요소를 찾아 없애준 뒤 맨 뒤에 push
      4-2. cache hit 시간을 더해줌
   5. 총 걸린 시간 리턴
*/

function solution(cacheSize, cities) {
  const hitTime = 1;
  const missTime = 5;

  if (!cacheSize) return cities.length * missTime;

  cities = cities.map((el) => el.toLowerCase());

  const cacheArr = Array(cacheSize).fill(0);
  let time = 0;

  for (let i = 0; i < cities.length; i++) {
    const cur = cities[i];
    const findCurIdx = cacheArr.findIndex((el) => el === cur);

    // cache hit
    if (findCurIdx !== -1) {
      cacheArr.splice(findCurIdx, 1);

      time += hitTime;
    }
    // cache miss
    else {
      if (cacheArr.length === cacheSize) cacheArr.shift();

      time += missTime;
    }

    cacheArr.push(cur);
  }

  return time;
}
