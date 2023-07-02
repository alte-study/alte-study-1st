/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * Problem Number: 12940
 * Level: 1
 * Algorithm: 연습문제
 */

/* pseudocode
   1. 최대공약수 (Greatest Common Divisor) (유클리드 호제법)
      1-0. 유클리드 호제법은 a, b의 최대공약수는 b, r의 최대공약수와 같다는 원리 이용
      1-1. a를 b로 나눈다.
      1-2. 나머지가 존재한다면 b를 a % b로 나눈다.
      1-3. 나머지가 0이라면 나누는데 사용한 숫자가 최대공약수이다.
   2. 최소공배수 (Least Common Multiple)
      2-1. 두 수를 곱한다.
      2-2. 최대공약수로 곱한 수를 나눈다.
*/

const GCD = (a, b) => {
  if (!b) return a;
  return GCD(b, a % b);
};

const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};

function solution(n, m) {
  return [GCD(n, m), LCM(n, m)];
}
