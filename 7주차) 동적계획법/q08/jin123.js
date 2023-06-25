const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const info = arr.map((el) => el.split(" ").map(Number));
const N = +n;
const result = Array(N + 1).fill(0);
for (let i = N - 1; i >= 0; i--) {
  const [T, P] = info[i];
  result[i] =
    T + i <= N ? Math.max(result[i + T] + P, result[i + 1]) : result[i + 1];
}
console.log(result[0]);
