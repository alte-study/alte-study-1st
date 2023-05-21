/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * Problem Number: 12909
 * Level: 2
 * Algorithm: 스택/큐
 */

/* pseudocode
   1. 문자열의 요소가 ( 라면 stack 증가
   2. 만약 (가 들어오기 전에 )가 먼저 들어왔다면 바로 false 리턴
   3. 문자열의 요소가 ) 라면 stack 감소
*/

function solution(s) {
  let stack = 0;

  for (const el of s) {
    if (el === '(') stack++;

    /* el === ')' 조건보다 먼저 있는 이유는
       stack 수 판별을 가장 마지막에 하게 되면 true인 결과도 false로 리턴하게 됨 */
    if (!stack) return false;

    if (el === ')') stack--;
  }

  return !stack;
}
