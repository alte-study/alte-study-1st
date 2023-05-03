const fs = require("fs");
const [T, ...list] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const result = [];
let idx = 0;

for (let i = 0; i < Number(T); i++) {
  const numberList = list.slice(idx + 1, idx + Number(list[idx]) + 1).sort();
  const hash = new Set();
  let resultFlag = "YES";
  numberList.findIndex((el) => {
    el.split("").findIndex((_, i, arr) => {
      if (hash.has(arr.slice(0, i + 1).join(""))) {
        resultFlag = "NO";
        return true;
      }
    });
    if (resultFlag === "NO") return true;
    hash.add(el);
  });
  result.push(resultFlag);
  idx += Number(list[idx]) + 1;
}
console.log(result.join("\n"));
