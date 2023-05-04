const fs = require("fs");
let [, arr1, , arr2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

arr1 = arr1
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
arr2 = arr2.split(" ").map(Number);

const binarySearch = (number) => {
  let first = 0;
  let last = arr1.length - 1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr1[mid] === number) return true;
    if (arr1[mid] < number) first = mid + 1;
    else last = mid - 1;
  }
  return false;
};

console.log(arr2.map((el) => (binarySearch(el) ? 1 : 0)).join("\n"));
