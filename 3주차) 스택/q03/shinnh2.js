/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	//의사코드
	/*
  0. 배열 stack에 s의 0번째 요소를 넣고 선언
  1. s를 1번째부터 순회하면서 
      1.1. s의 현재 요소가 stack의 마지막 요소와 같다면: stack의 요소를 삭제하고 그냥 넘어간다.
      1.2. 아니라면 stack에 s의 현재 요소를 삽입한다.
  2. stack을 출력의 값을 하나의 문자열로 출력한다.
  */
	let stack = [s[0]];
	for (let i = 1; i < s.length; i++) {
		if (s[i] === stack[stack.length - 1]) {
			stack.pop();
			continue;
		} else {
			stack.push(s[i]);
		}
	}
	return stack.join("");
};
