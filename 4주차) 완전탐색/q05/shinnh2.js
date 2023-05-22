//의사코드
/*
1. sizes의 각 요소 w,h 중에서 가장 큰 값이 w가 되도록 바꿔준다. 
2. 값이 바뀐 sizes를 순회하면서 가장 큰 w, 가장 큰 h를 찾는다.
3. (가장 큰 값w*가장 큰 값h)을 리턴한다.
*/
function solution(sizes) {
	let newSizes = sizes.map((el) => (el[0] < el[1] ? [el[1], el[0]] : el));
	let [maxW, maxH] = newSizes[0];
	for (let i = 1; i < newSizes.length; i++) {
		if (maxW < newSizes[i][0]) maxW = newSizes[i][0];
		if (maxH < newSizes[i][1]) maxH = newSizes[i][1];
	}
	return maxW * maxH;
}
