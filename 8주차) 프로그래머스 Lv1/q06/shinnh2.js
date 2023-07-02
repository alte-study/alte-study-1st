//의사코드
/*
0. 다음의 변수가 필요하다.
- win_nums의 요소들이 키로 존재하는 hash
- 일치하는 개수를 담을 accord=0
- 0의 개수를 담을 zero=0
- 순위를 담을 배열 prize=[6,6,5,4,3,2,1]
1. lottos를 순회하며 다음을 체크한다.
    1.1. 현재 요소가 0이라면 zero에 1을 추가하고 다음 요소를 살핀다.
    1.1. 현재 요소가 win_nums에 존재한다면 accord에 1을 더한다.
2. 순위를 집계한다. 맞춘 개수를 구해 prize[(개수)]가 곧 순위가 된다.
    2.1. 최고 순위: prize[accord+zero]
    2.2. 최저 순위: prize[accord]
3. [최고 순위, 최저 순위]를 리턴한다.
*/
function solution(lottos, win_nums) {
  let hash={};
  win_nums.forEach(el=>hash[el]=1);
  let accord=0, zero=0;
  const prize=[6,6,5,4,3,2,1];
  for(let el of lottos){
      if(el===0) zero+=1;
      else if(hash[el] !== undefined) accord+=1;
  }
  return [prize[accord+zero], prize[accord]]
}