/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 20
 * Level: Easy
 * Algorithm: String / Stack
 */

/**
 * @param {string} s
 * @return {boolean}
 */

/* pseudocode
   1. 스택용 배열 생성 (stack)
   2. 입력 문자열이 여는 괄호일 경우 종류에 맞는 닫는 괄호를 스택에 push
   3. 입력 문자열이 여는 괄호가 아닐 경우 stack에 가장 마지막에 넣은 닫는 괄호와 일치하지 않다면 false 리턴
   4. stack의 길이가 0인지 여부를 리턴
*/

var isValid = function (s) {
  const stack = [];

  for (const el of s) {
    if (el === '(') stack.push(')');
    else if (el === '[') stack.push(']');
    else if (el === '{') stack.push('}');
    else if (el !== stack.pop()) return false;
  }

  return !stack.length;
};

/**
 * (){}[] 인 경우
 * ( -> stack [')']
 * ) -> stack.pop() === ')' stack []
 * { -> stack ['}']
 * } -> stack.pop() === '}' stack []
 * [ -> stack [']']
 * ] -> stack.pop() === ']' stack []
 * stack.length (0) === 0 (true)
 */

/**
 * ({[]} 인 경우
 * ( -> stack [')']
 * { -> stack [')', '}']
 * [ -> stack [')', '}', ']']
 * ] -> stack.pop() === ']' stack [')', '}']
 * } -> stack.pop() === '}' stack [')']
 * stack.length (1) !== 0 (false)
 */

/**
 * (){}[) 인 경우
 * ( -> stack [')']
 * ) -> stack.pop() === ')' stack []
 * { -> stack ['}']
 * } -> stack.pop() === '}' stack []
 * [ -> stack [']']
 * ) -> stack.pop() (']') !== ')' return false
 */
