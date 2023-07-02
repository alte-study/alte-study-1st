/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/12947
 * Problem Number: 12947
 * Level: 1
 * Algorithm: 연습문제
 */

/* pseudocode
   1. x의 자릿수 합을 구한다.
      1-1. x를 10으로 나눈 나머지를 digitCount에 더한다.
      1-2. x를 10으로 나눈 몫을 다시 x에 할당한다.
   2. x를 자릿수 합으로 나눈 결과를 리턴한다.
      2-1. 나머지가 존재하지 않으면 하샤드 수이므로 true를 리턴한다.
      2-2. 나머지가 존재하면 하샤드 수가 아니므로 false를 리턴한다.
*/

const getDigitSum = (num) => {
  let digitSum = 0;

  while (num > 0) {
    digitSum += num % 10;
    num = Math.floor(num / 10);
  }

  return digitSum;
};

function solution(x) {
  const digitSum = getDigitSum(x);

  return !(x % digitSum);
}
