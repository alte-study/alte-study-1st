function solution(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if ((n - 1) % i === 0) return i;
  }
  return n - 1;
}
