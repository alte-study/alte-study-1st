/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	//의사코드
	/*
  0. 빈 배열 result
  1. 시작점을 기준으로 intervals를 정렬한다.
  2. result에 intervals의 0번째 요소를 삽입한다.
  3. intervals의 1번째 요소부터 순회하며 확인한다.
  4. result의 마지막 요소(last)의 1번째 값 >= intervals의 현재요소(i)의 0번째 값이면: 
      4.1. 병합대상이므로 last[1]과 intervals[i][1]중에 큰 값으로 last[1]을 갱신한다.
      4.2. 병합대상이 아니라면 intervals[i]를 result에 삽입한다.
  5. result를 리턴한다.
  */
	intervals.sort((a, b) => a[0] - b[0]);
	let result = [intervals[0]];
	for (let i = 1; i < intervals.length; i++) {
		let last = result[result.length - 1];
		if (last[1] >= intervals[i][0])
			last[1] = last[1] > intervals[i][1] ? last[1] : intervals[i][1];
		else result.push(intervals[i]);
	}
	return result;
};
