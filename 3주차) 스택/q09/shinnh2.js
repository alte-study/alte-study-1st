//의사코드
/*
0. 스택 역할을 할 빈 배열 stack
1. s의 첫번째 글자가 ')'이라면 바로 false를 리턴한다.
2. s의 첫번째 글자를 stack배열에 넣는다.
3. s를 두번째 글자부터 순회하면서
    3.1. 현재 글자가 ')'이고 stack의 마지막 요소가 '('일 경우 
    stack의 마지막 요소를 삭제하고 그냥 넘어간다.
    3.2. 아니라면 현재 글자를 stack에 삽입한다.
4. stack이 비어있다면 true를, 아니라면 false를 리턴한다.
*/
function solution(s) {
	if (s[0] === ")") return false;
	let stack = [s[0]];
	for (let i = 1; i < s.length; i++) {
		if (s[i] === ")" && stack[stack.length - 1] === "(") {
			stack.pop();
			continue;
		} else {
			stack.push(s[i]);
		}
	}
	return stack.length === 0;
}
