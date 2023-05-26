function solution(sizes) {
  let max = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    if (max[0] < Math.max(...sizes[i])) {
      max[0] = Math.max(...sizes[i]);
    }
    if (max[1] < Math.min(...sizes[i])) {
      max[1] = Math.min(...sizes[i]);
    }
  }
  return max[0] * max[1];
}
