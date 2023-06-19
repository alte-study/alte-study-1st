const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();
const result = [, 0];
for (let i = 2; i <= N; i++) {
  result[i] = result[i - 1] + 1;
  if (i % 2 === 0) result[i] = Math.min(result[i], result[i / 2] + 1);
  if (i % 3 === 0) result[i] = Math.min(result[i], result[i / 3] + 1);
}
console.log(result[N]);
