let [N, ...input] = require("fs")
	.readFileSync("./10845.txt")
	.toString()
	.replace(/\r/g, "")
	.split("\n"); // ./10845.txt /dev/stdin

//의사코드
/*
0. 큐가 될 빈 배열 queue, 출력을 모아둘 빈 배열 output
1. 입력값을 순회하며 명령을 하나씩 확인한다.
  > push X: 정수 X를 큐에 넣는 연산이다.
  > pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  > size: 큐에 들어있는 정수의 개수를 출력한다.
  > empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
  > front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  > back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
2. output의 값을 줄바꿈으로 구분된 하나의 문자열로 출력한다.
*/

let queue = [];
let output = [];
for (let el of input) {
	if (el.split(" ")[0] === "push") {
		queue.push(el.split(" ")[1]);
	} else {
		switch (el) {
			case "pop":
				output.push(queue.length === 0 ? -1 : queue.shift());
				break;
			case "size":
				output.push(queue.length);
				break;
			case "empty":
				output.push(queue.length === 0 ? 1 : 0);
				break;
			case "front":
				output.push(queue[0] || -1);
				break;
			case "back":
				output.push(queue[queue.length - 1] || -1);
				break;
		}
	}
}
console.log(output.join("\n"));
