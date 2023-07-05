/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 * Problem Number: 17677
 * Level: 2
 * Algorithm: 2018 KAKAO BLIND RECRUITMENT
 */

/* pseudocode
   1. 다중집합을 만드는 함수 multiset
      1-1. 문자열의 앞뒤 인덱스를 소문자로 합성 (대소문자 구분 안하기 때문)
      1-2. 합성한 문자열이 영어쌍으로 이루어졌다면 push (setReg로 판단)
   2. 교집합과 합집합을 만드는 함수 interUnion
      2-1. set2[i]가 set1에 포함돼있다면 set1에서 해당 요소를 잘라 intersectionSet에 push (중복 허용되기 때문)
      2-2. 합집합인 unionSet에 set2[i]를 push
      2-3. set1에 남은 요소들을 unionSet에 push
      2-4. 교집합인 intersectionSet과 합집합인 unionSet을 반환
   3. 자카드 유사도를 출력하는 함수 jaccard
      3-1. 합집합의 개수와 교집합의 개수를 parameter로 요구
      3-2. 둘 다 공집합이라면 65536을 출력 (공집합일 경우 유사도 1이므로)
      3-3. 교집합 / 합집합 * 65536한 값에서 소수점을 버려 반환
   4. str1과 str2를 각각 multiset으로 변환해 저장
   5. 두 multiset의 교집합과 합집합을 구함 (interUnion 함수 사용)
   6. 두 집합의 jaccard 유사도를 반환
*/

const multiset = (str) => {
  const strSet = [];
  const setReg = /^[a-z][a-z]$/;

  for (let i = 0; i < str.length - 1; i++) {
    const pair = str[i].toLowerCase() + str[i + 1].toLowerCase();

    if (setReg.test(pair)) strSet.push(pair);
  }

  return strSet;
};

const interUnion = (set1, set2) => {
  const intersectionSet = [];
  const unionSet = [];

  for (let i = 0; i < set2.length; i++) {
    if (set1.includes(set2[i]))
      intersectionSet.push(set1.splice(set1.indexOf(set2[i]), 1));

    unionSet.push(set2[i]);
  }

  for (let i = 0; i < set1.length; i++) {
    unionSet.push(set1[i]);
  }

  return [intersectionSet, unionSet];
};

const jaccard = (quantity1, quantity2) => {
  if (!quantity1 && !quantity2) return 65536;

  const similarity = quantity1 / quantity2;

  return Math.floor(similarity * 65536);
};

function solution(str1, str2) {
  const str1Set = multiset(str1);
  const str2Set = multiset(str2);

  const [intersectionSet, unionSet] = interUnion(str1Set, str2Set);

  return jaccard(intersectionSet.length, unionSet.length);
}
