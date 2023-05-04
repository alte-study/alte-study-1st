const fs = require("fs");
const [N, C, ...house] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/g)
  .map(Number);
house.sort((a, b) => a - b);

console.log(N, C, house);
let first = 1;
let last = house[house.length - 1] - house[0];

const check = (mid) => {
  let count = 0;
  let prev = 0;
  for (let i = 1; i < house.length; i++) {
    if (house[i] - house[prev] >= mid) {
      count++;
      prev = i;
    }
    if (count === C - 1) return true;
  }
  return false;
};

while (first <= last) {
  let mid = Math.floor((first + last) / 2);
  if (check(mid)) {
    first = mid + 1;
  } else {
    last = mid - 1;
  }
}
console.log(last);
