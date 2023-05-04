const fs = require("fs");
const [, input, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const M = Number(m);
const budget = input.split(" ").map(Number);

const check = (mid) => {
  return (
    budget.reduce((acc, cur) => (cur <= mid ? cur + acc : mid + acc), 0) <= M
  );
};

let first = 0,
  last = Math.max(...budget);

while (first <= last) {
  let mid = Math.floor((first + last) / 2);
  if (check(mid)) {
    first = mid + 1;
  } else {
    last = mid - 1;
  }
}
console.log(last);
