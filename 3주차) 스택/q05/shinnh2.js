let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.replace(/\r/g, "")
	.split("\n");

//의사코드
/*
0. 스택 역할을 한 빈 배열 stack, 출력결과를 담을 빈 배열 output을 선언
1. input을 순회하며 명령을 확인한다.
2. 확인한 명령에 따라 처리한다.
> push X: 정수 X를 스택에 넣는 연산이다.
> pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
> size: 스택에 들어있는 정수의 개수를 출력한다.
> empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
> top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
3. output의 요소를 줄바꿈하여 출력한다.
*/

let stack = [];
let output = [];

for (let el of input) {
	if (el.split(" ")[0] === "push") stack.push(el.split(" ")[1]);
	else {
		switch (el) {
			case "pop":
				output.push(stack.length === 0 ? -1 : stack.pop());
				break;
			case "size":
				output.push(stack.length);
				break;
			case "empty":
				output.push(stack.length === 0 ? 1 : 0);
				break;
			case "top":
				output.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
				break;
		}
	}
}

console.log(output.join("\n"));
