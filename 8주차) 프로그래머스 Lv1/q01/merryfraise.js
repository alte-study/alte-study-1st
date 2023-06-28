/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/160586
 * Problem Number: 160586
 * Level: 1
 * Algorithm: 대충 만든 자판
 */

/* pseudocode
   1. keymap의 문자들의 인덱스를 저장한다. (같은 값이 있다면 더 작은 쪽을)
   2. targets의 문자들을 keyMap과 비교하여 존재한다면 총 입력 값을 더해 저장한다.
   3. 문자열이 존재하지 않을경우 만들지 못한다는 뜻이므로 -1을 저장한다.
*/

function solution(keymap, targets) {
  const keyMap = new Map();
  const result = [];

  keymap.map((el) => {
    for (let i = 0; i < el.length; i++) {
      if (!keyMap.get(el[i])) keyMap.set(el[i], i + 1);
      else keyMap.set(el[i], Math.min(keyMap.get(el[i]), i + 1));
    }
  });

  targets.map((el, idx) => {
    let count = 0;

    for (const key of el) {
      if (count === -1) break;
      else keyMap.get(key) ? (count += keyMap.get(key)) : (count = -1);
    }

    result[idx] = count;
  });

  return result;
}
