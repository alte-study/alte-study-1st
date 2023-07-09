/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * Problem Number: 70129
 * Level: 2
 * Algorithm: 월간 코드 챌린지 시즌1
 */

/* pseudocode
   1. 제거할 0의 개수를 판단하는 함수 countZero
      1-1. 문자열을 숫자 배열로 변경한다.
      1-2. 현재 문자가 0이라면 acc에 1을 더해 총 0의 개수를 반환한다.
   2. 길이를 2진수로 변환하는 함수 lengthToBinary
      2-1. 제거한 0의 개수를 2진수로 반환한다.
   3. 헬퍼 재귀 메소드 helper
      3-1. 문자열이 1이 되면 재귀 종료 (base case)
      3-2. 현재 문자열의 길이를 curLength로 지정
      3-3. 현재 문자열의 0의 개수를 curZeroCount로 지정
      3-4. 0을 제거한 문자열의 길이를 2진수로 변환한 값을 curBinary로 지정
      3-4. 변환을 실행했기 때문에 converCount를 1 증가
      3-5. 제거해야할 0의 개수를 zeroCount에 추가
      3-6. 문자열에 0이 포함되지 않을 때까지 helper(curBinary)를 실행
   4. helper 함수 호출
   5. converCount와 zeroCount를 반환
*/

const countZero = (s) => {
  const array = s.split('').map(Number);

  return array.reduce((acc, cur) => (acc += cur ? 0 : 1), 0);
};

const lengthToBinary = (n) => {
  return n.toString(2);
};

function solution(s) {
  let convertCount = 0;
  let zeroCount = 0;

  const helper = (helperInput) => {
    if (helperInput === '1') return;

    const curLength = helperInput.length;
    const curZeroCount = countZero(helperInput);
    const curBinary = lengthToBinary(curLength - curZeroCount);

    convertCount++;
    zeroCount += curZeroCount;

    helper(curBinary);
  };

  helper(s);

  return [convertCount, zeroCount];
}
