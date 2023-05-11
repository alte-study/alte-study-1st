function bubble(arr1, arr2) {
  let arr_s = arr1.slice(arr2[0] - 1, arr2[1]),
    memo;
  for (let i = 0; i < arr_s.length; i++) {
    for (let j = 0; j <= arr_s.length - i; j++) {
      if (arr_s[j] > arr_s[j + 1]) {
        (memo = arr_s[j]), (arr_s[j] = arr_s[j + 1]), (arr_s[j + 1] = memo);
      }
    }
  }
  return arr_s[arr2[2] - 1];
}

function solution(array, commands) {
  return commands.map((el) => bubble(array, el));
}
