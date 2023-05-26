function solution(number, k) {
  const stack = [];
  for (const num of number) {
    while (stack.length && k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  return (k > 0 ? stack.slice(0, -k) : stack).join("");
}
