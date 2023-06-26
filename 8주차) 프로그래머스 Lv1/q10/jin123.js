function solution(n) {
  for (let i = 2; i <= n / 2; i++) {
    if ((n - 1) % i === 0) return i;
  }
  return n - 1;
}
