const fs = require("fs");
const [, arr1, , arr2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr1Set = new Set(arr1.split(" "));
console.log(
  arr2
    .split(" ")
    .reduce((acc, cur) => (arr1Set.has(cur) ? [...acc, 1] : [...acc, 0]), [])
    .join("\n")
);
