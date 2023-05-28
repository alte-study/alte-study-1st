//의사코드
/*
0. 마지막 인덱스 lastIdx, 가장멀리 갈 수 있는 인덱스 farthestIdx(초기값0)
1. nums의 길이가1이면 바로 출발과 동시에 마지막에 도달하므로 true처리한다.
2. 아래 3~5를 nums의 처음부터 마지막 '전' 인덱스까지 반복한다. 마지막 인덱스에서는 계산할 필요가 없기 때문이다.
3. 현재 인덱스에서 가장 멀리 갈 수 있는 인덱스 i+nums[i],
기존 가장 멀리 갈 수 있는 인덱스 farthestIdx 중에서 
제일 먼 인덱스를 새롭게 farthestIdx으로 갱신한다.
> 설명: 
-현재 인덱스에서 최대한 멀리 갈 수 있는 인덱스는 i+nums[i]이다.
-이전의 인덱스에서 정해진 가장 멀리갈 수 있는 인덱스 즉 farthestIdx 가 현재의 인덱스보다 크다면
-현재 인덱스를 그냥 지나가거나, 이후에 더 갈 수 있는 인덱스가 없다면 현재 인덱스로 돌아올 것이다.
-때문에 현재 인덱스에서 더 먼 인덱스로 갈 수 있다면 그것이 곧 가장 멀리 갈 수 있는 인덱스이다. 
-따라서 farthestIdx와 현재 새롭게 멀리 갈 수 있는 인덱스 i+nums[i] 중 더 먼 인덱스를 가장 멀리 갈 수 있는 인덱스 farthestIdx로 갱신한다.
4. 멀리 갈 수 있는 인덱스 farthestIdx를 갱신했는데도 이것이 현재 인덱스와 같다면 더 이상 갈 수 없다는 의미므로 false를 리턴한다.
5. farthestIdx가 마지막 인덱스보다 같거나 크다면 마지막에 도달가능한 것이므로 true를 리턴한다.
6. 반복문이 끝나면 3번에 해당사항이 없기 때문에 마지막 인덱스까지 도착이 가능한 것이라 보고 true를 리턴한다.(이 과정은 없어도 된다.)
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let lastIdx = nums.length - 1;
	let farthestIdx = 0;
	if (lastIdx === 0) return true;
	for (let i = 0; i < lastIdx; i++) {
		farthestIdx = Math.max(farthestIdx, i + nums[i]);
		if (farthestIdx === i) return false;
		if (farthestIdx >= lastIdx) return true;
	}
	return true; //없어도 통과 가능
};
