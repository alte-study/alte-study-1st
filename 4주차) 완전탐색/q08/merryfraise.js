/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * Problem Number: 42842
 * Level: 2
 * Algorithm: 완전탐색
 */

/* pseudocode
   1. brown의 개수는 yellow의 넓이 2개, 높이 2개, 모서리 4개를 더한 값과 같음
   2. yellow의 넓이가 높이보다 길거나 같을 때까지 반복하는 반복문 설정
   3. yellow를 높이로 나눴을 때 나머지가 생긴다면 높이를 증가
   4. yellow를 높이로 나눴을 때 나머지가 없다면 넓이를 재할당
   5. 이 때 brown의 개수가 yellow의 현재 넓이, 높이에 맞는 값이라면 answer에 push
   6. 아니라면 다시 yellow의 높이를 증가
*/

function solution(brown, yellow) {
  const answer = [];

  let yelWidth = yellow;
  let yelHeight = 1;

  while (yelHeight <= yelWidth) {
    if (yellow % yelHeight) {
      yelHeight++;
    } else {
      yelWidth = yellow / yelHeight;

      if (yelWidth * 2 + yelHeight * 2 + 4 === brown) {
        answer.push(yelWidth + 2, yelHeight + 2);
        break;
      } else yelHeight++;
    }
  }

  return answer;
}
