/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 1122
 * Level: Easy
 * Algorithm: Array / Hash Table / Sorting / Counting Sort
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

/* pseudocode
   0. Counting Sort 이용 및 solution 보고 했습니다.. ㅋㅋㅋㅋㅋㅋ
   1. 총 숫자가 몇개씩 있는지 카운트 하기 위한 배열 생성 (counting)
   2. arr1에 있는 숫자들을 counting의 인덱스에 개수를 저장
   3. arr2에 있는 숫자를 counting에서 찾은 뒤, arr1의 앞 인덱스부터 해당 숫자의 개수만큼 대체
   4. arr2에 없는 숫자는 counting에서 찾은 뒤, arr1의 나머지 인덱스에 대체
*/

var relativeSortArray = function (arr1, arr2) {
  const counting = [];

  for (const el of arr1) {
    counting[el] = (counting[el] || 0) + 1;
  }

  let idx = 0;

  for (const el of arr2) {
    while (counting[el]-- > 0) {
      arr1[idx++] = el;
    }
  }

  for (let i = 0; i < counting.length; i++) {
    while (counting[i]-- > 0) {
      arr1[idx++] = i;
    }
  }

  return arr1;
};
