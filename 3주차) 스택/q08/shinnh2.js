//의사코드
/*
0. 매 연산을 담을 배열 stack
1. tokens를 순회하며 연산을 확인한다.
    1.1. 그냥 숫자일 경우: stack에 삽입한다.
    1.2. 연산일 경우 
        > stack의 마지막 요소를 삭제하여 n2에 할당한다.
        > 한 번 더 stack의 마지막 요소를 삭제하여 n1에 할당한다.
        > n1 연산 n2의 결과를 정수로 반환하여(/일 경우 대비) stack에 삽입한다.
2. stack[0]의 값을 리턴한다.
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	let stack = [];
	for (let el of tokens) {
		if (isNaN(Number(el))) {
			let operator = el;
			let n2 = stack.pop();
			let n1 = stack.pop();
			if (operator === "+") stack.push(n1 + n2);
			if (operator === "-") stack.push(n1 - n2);
			if (operator === "*") stack.push(n1 * n2);
			if (operator === "/") stack.push(parseInt(n1 / n2));
		} else {
			stack.push(+el);
		}
	}
	return stack[0];
};
