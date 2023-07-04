//의사코드
/*
1. s를 공백을 기준으로 분리하여 배열 arr을 만든다.
2. arr을 순회하며 
    2.1. 빈 문자열인 경우 그냥 넘어가고
    2.2. 각 글자를 앞자리만 대문자로, 뒷자리는 소문자로 변환한다.
3. 바뀐 arr을 다시 공백을 기준으로 합쳐 하나의 문자열로 변환하여 리턴한다.
*/
function solution(s) {
	return s
		.split(" ")
		.map((el) => {
			if (el === "") return "";
			return `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`;
		})
		.join(" ");
}
