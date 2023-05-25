//의사코드
/*
0. yellow의 높이 yh=1, yellow의 너비 yw=yellow
1. 모서리를 제외한 yellow를 둘러쌀 타일 leftBrown=brown-4값을 구한다. 
(모서리를 제외한 brown타일이 yellow를 감싼다면 전체 너비와 높이를 쉽게 구할 수 있기 때문이다.)
2. leftBrown=brown - 현재 yellow의 너비 yw*2가 
양수인지 아닌지 확인한다.
  > 맞다면 높이를 판별해야 한다. (3번으로)
  > 아니라면 yh의 높이를 높이고 yw값을 수정해야 한다. (4번으로) 
3. leftBrown를 2로 나누었을 때 yellow의 높이가 된다면 알맞은 ㄷ답을 찾은 것이다. 따라서
  3.1. leftBrown/2===yh라면 
    > 현재 yw, yh에 양 모서리를 더하여 리턴한다.
    > 아니라면 4번으로
4. yellow의 높이를 하나씩 높여가며 다음 높이와 너비를 찾는다. (그냥 1씩 추가하면 안된다.)
  4.1. yh++한다.
  4.2. yellow타일/yh의 나머지가 0이라면
    > 반복을 멈추고
    > 아니라면 4.2.을 반복한다.
  4.3. 현재 yh=yh, 현재 yw=yellow타일/현재yh
5. 2~4번을 yw가 1보다 클 동안만 반복한다.
6. yw, yh에 양 모서리를 더하여 리턴한다. 
*/
function solution(brown, yellow) {
	let yh = 1,
		yw = yellow;
	let leftBrown;
	while (yw > 1) {
		leftBrown = brown - 4 - yw * 2;
		if (leftBrown > 0 && leftBrown / 2 === yh) return [yw + 2, yh + 2];
		do {
			yh++;
		} while (yellow % yh !== 0);
		yh = yh;
		yw = yellow / yh;
	}
	return [yw + 2, yh + 2];
}
