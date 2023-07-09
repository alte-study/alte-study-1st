function solution(k, tangerine) {
  const arr = [0];
  let count = 0;
  for (let i = 0; i < tangerine.length; i++) {
    arr[tangerine[i]] = (arr[tangerine[i]] || 0) + 1;
  }
  arr.sort((a, b) => b - a);
  for (let j = 0; j < arr.length; j++, count++) {
    if (k <= 0) {
      return count;
    }
    k -= arr[j];
  }
}
