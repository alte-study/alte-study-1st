//의사코드
/*
1. matrix의 요소들을 한 배열로 만든다.
2. 이분탐색으로 target값을 찾는다. 
3. 탐색이 끝나면 없으므로 false를 리턴한다.
*/
var searchMatrix = function (matrix, target) {
	let arr = [];
	matrix.forEach((el) => arr.push(...el));
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return true;
		if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return false;
};
