//의사코드
/*
0. 현재 만족한 어린이 수 count=0, 현재 어린이의 인덱스 i=0, 현재 쿠키 주머니 인덱스 c=0
1. 어린이를 소박한 순서대로, 쿠키 주머니를 작은 것부터 정렬한다.
2. 현재 어린이가 필요한 쿠키수인 g[i]의 값이 
    2.1. s[c]보다 같거나 작다면 
    -이 어린이는 만족할 수 있으니 count에 1을 더한다. 
    -다음 어린이도 쿠키를 줘야 하므로 i에 1을 더한다.
    -그리고 현재 쿠키 주머니가 하나 소진되었으니 c도 1을 더한다.
    2.2. 아니라면
    -이 어린이는 아직 만족할 수 없으므로 현재 쿠키 주머니는 필요없고 다음 주머니를 살펴보기 위해 c에 1을 더한다.
4. 이 과정을 c의 값이 s의 길이보다 작고, i가 g의 길이보다 작을 동안 반복한다. 
5. 쿠키 나눔이 끝났으니 count를 리턴한다.
*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	let count = 0,
		i = 0,
		c = 0;
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);
	while (c < s.length && i < g.length) {
		if (g[i] <= s[c]) {
			count++;
			i++;
			c++;
		} else {
			c++;
		}
	}
	return count;
};
