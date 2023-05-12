const fs = require("fs");
let [NK, input] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const K = +NK.split(" ")[1];
const arr = input.split(" ").map(Number);
let count = 0;
for (let i = arr.length - 1; i > -1; i--) {
  let max = i;
  for (let j = i - 1; j > -1; j--) {
    if (arr[max] <= arr[j]) max = j;
  }
  if (max !== i) {
    [arr[i], arr[max]] = [arr[max], arr[i]];
    count++;
    if (count === K) break;
  }
}
if (count < K) console.log(-1);
else console.log(arr.join(" "));
