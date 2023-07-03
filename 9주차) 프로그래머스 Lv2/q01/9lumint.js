function solution(arr1, arr2) {
  let ans = [];
  for (let i = 0; i < arr1.length; i++) {
    let subAns = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let el = 0;
      for (let k = 0; k < arr2.length; k++) {
        el += arr1[i][k] * arr2[k][j];
      }
      subAns.push(el);
    }
    ans.push(subAns);
  }
  return ans;
}
