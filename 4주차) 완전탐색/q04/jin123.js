const fs = require("fs");
let [NM, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);
arr = arr.map((el) => el.split(""));
let max = 0;
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let visited = Array(26).fill(false);
function dfs(x, y, count = 0) {
  const charCode = arr[x][y].charCodeAt(0) - 65;
  visited[charCode] = true;
  count++;
  if (max < count) {
    max = count;
  }
  if (max === 26) return;
  for (let i = 0; i < 4; i++) {
    let xCoord = x + directions[i][0],
      yCoord = y + directions[i][1];

    if (
      xCoord >= 0 &&
      xCoord < N &&
      yCoord >= 0 &&
      yCoord < M &&
      !visited[arr[xCoord][yCoord].charCodeAt(0) - 65]
    ) {
      dfs(xCoord, yCoord, count);
    }
  }
  visited[charCode] = false;
}
dfs(0, 0);
console.log(max);
