//의사코드
/*
0. 모든 가지수가 자신을 노드로, 왼쪽 자식은 2배수, 오른쪽 자식은 끝에 1을 더한 값이 되는, 힙 모양을 띠고 있다고 가정한다. (루트는 A)
1. [자신의 값, depth] 형태로 노드를 생성해가며 값을 탐색한다. 해당 노드는 queue에 추가해가며 확인한다. 
2. queue=[[A,1]], result는 -1로 선언한다.
3. 아래의 과정을 queue가 빌 때까지 반복한다.
  3.1. queue의 앞의 값을 제거하고 현재 노드 nowNode, 현재 깊이 depth로 할당한다.
  3.2. 현재 노드가 b라면 result에 depth를 할당하고 반복문을 멈춘다.
  3.3. 현재 노드가 b보다 작다면 자식노드를 생성한다.
    queue.push([nowNode*2,depth+1])
    queue.push([nowNode*2*10+1,depth+1]) 
4. 3의 과정이 끝나면 result를 반환한다.
*/

let [A, B] = require("fs")
	.readFileSync("./16953.txt")
	.toString()
	.replace(/\r/g, "")
	.trim()
	.split(" "); // ./16953.txt /dev/stdin
B = +B;

let queue = [[+A, 1]];
let result = -1;
while (queue.length) {
	let [nowNode, depth] = queue.shift();
	if (nowNode === B) {
		result = depth;
		break;
	}
	if (nowNode < B) {
		queue.push([nowNode * 2, depth + 1]);
		queue.push([nowNode * 10 + 1, depth + 1]);
	}
}
console.log(result);
