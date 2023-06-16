const fs = require("fs");
const [T, ...info] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = [];
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
class Matrix {
  constructor(value, H, W) {
    this.matrix = value;
    this.H = H;
    this.W = W;
  }
  dfs(x, y) {
    this.matrix[x][y] = ".";
    direction.forEach((el) => {
      const xCoord = x + el[0];
      const yCoord = y + el[1];
      if (
        xCoord >= 0 &&
        yCoord >= 0 &&
        xCoord < this.H &&
        yCoord < this.W &&
        this.matrix[xCoord][yCoord] !== "."
      ) {
        this.dfs(xCoord, yCoord);
      }
    });
  }
}
for (let i = 0; i < +T; i++) {
  const [HW, ...matrixInfo] = info.splice(0, +info[0].split(" ")[0] + 1);
  const [H, W] = HW.split(" ").map(Number);
  const sheep = new Matrix(
    matrixInfo.map((el) => el.split("")),
    H,
    W
  );
  let count = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (sheep.matrix[i][j] === "#") {
        sheep.dfs(i, j);
        count++;
      }
    }
  }
  result.push(count);
}
console.log(result.join("\n"));
