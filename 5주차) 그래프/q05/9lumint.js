const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

let arr = input.splice(0), result = [], n, p;
for (let i = 0; i < T; i++) {
  n = arr[0][0], p = arr[0][1];
  for (let j = 0; j <= p; j++) {
    arr.shift();
  }
  result.push(n - 1);
}
console.log(result.join("\n"));
