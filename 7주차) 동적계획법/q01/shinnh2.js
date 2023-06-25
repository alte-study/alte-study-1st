/**
 * @param {number} numRows
 * @return {number[][]}
 */
//의사코드
/*
0. 결과값을 담을 2차원 배열 output을 선언한다.
1. numRows의 값이 1이면 output에 [1]을 삽입한다.
2. numRows의 값이 2이면 output에 [1,1]을 삽입한다.
3. numRows의 값이 3이상이면 
    3.1. ouput의 마지막 배열을 순회하며 현재 인덱스+다음 인덱스가 값으로 구성된 새 배열을 만든다.
    3.2. 완성된 배열의 앞 뒤로 1을 삽입하여 ouput의 마지막에 삽입한다.
4. 위 과정을 output의 길이가 numRows보다 작을 동안 반복한다.
5. output을 리턴한다.
*/
var generate = function (numRows) {
	const output = [[1]];
	while (output.length < numRows) {
		let arr = [];
		let last = output[output.length - 1];
		if (output.length >= 2) {
			for (let i = 0; i < last.length - 1; i++) {
				arr.push(last[i] + last[i + 1]);
			}
		}
		arr.unshift(1);
		arr.push(1);
		output.push(arr);
	}
	return output;
};
