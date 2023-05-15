/**
 * @param {string[]} tokens
 * @return {number}
 */

const operatorFn = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
};

var evalRPN = function (tokens) {
  const stack = [];
  const operators = new Set(Object.keys(operatorFn));
  tokens.forEach((value) => {
    if (operators.has(value)) {
      const [num1, num2] = stack.splice(stack.length - 2, 2);
      stack.push(operatorFn[value](num1, num2));
    } else stack.push(+value);
  });
  return stack[0];
};
