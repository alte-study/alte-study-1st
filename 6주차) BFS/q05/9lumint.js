const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);
let answer = -1;

const bfs = () => {
  const queue = [A, 1];
  while (queue.length) {
    const cur = queue.shift(),
      cnt = queue.shift();
    if (cur === B) {
      return cnt;
    } else {
      if (cur * 2 <= B) {
        queue.push(cur * 2, cnt + 1);
      }
      if (Number(cur + "1") <= B) {
        queue.push(Number(cur + "1"), cnt + 1);
      }
    }
  }
  return -1;
};

console.log(bfs());
