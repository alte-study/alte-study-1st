const fs = require("fs");
let [N, M, L, ...rest] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/g)
  .map(Number);
rest.sort((a, b) => a - b);
rest = [0, ...rest, L];

let first = 1;
let last = L - 1;

const check = (distance) => {
  let count = 0;
  for (let i = 1; i < N + 2; i++) {
    count += Math.ceil((rest[i] - rest[i - 1]) / distance) - 1;
    if (count > M) return false;
  }
  return true;
};

while (first <= last) {
  let mid = Math.floor((first + last) / 2);
  if (check(mid)) {
    last = mid - 1;
  } else {
    first = mid + 1;
  }
}
console.log(first);
