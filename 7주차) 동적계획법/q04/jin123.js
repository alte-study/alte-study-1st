function solution(N, number) {
  if (N === number) return 1;
  let answer = [];
  for (let i = 1; i <= 8; i++) {
    answer[i] = new Set();
    answer[i].add(+`${N}`.repeat(i));
    for (let j = 1; j <= i / 2; j++) {
      for (const v1 of [...answer[j]]) {
        for (const v2 of [...answer[i - j]]) {
          answer[i].add(v1 + v2);
          answer[i].add(v1 * v2);
          answer[i].add(v1 > v2 ? v1 - v2 : v2 - v1);
          if (v2) answer[i].add(parseInt(v1 / v2));
          if (v1) answer[i].add(parseInt(v2 / v1));
        }
        if (answer[i].has(number)) {
          return i;
        }
      }
    }
  }
  return -1;
}
