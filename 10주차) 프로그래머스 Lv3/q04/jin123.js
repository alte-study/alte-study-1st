class Table {
  constructor() {
    this.table = new Map();
  }
  get(r, c) {
    let value = this.table.get(r + "," + c);
    return value ? value.split(",") : null;
  }
  set(r1, c1, r2, c2) {
    this.table.set(r1 + "," + c1, r2 + "," + c2);
  }
  has(r, c) {
    return this.table.has(r + "," + c);
  }
  update(r1, c1, r2, c2) {
    const targetKey = r1 + "," + c1;
    const targetValue = r2 + "," + c2;
    let keys = this.table.entries();
    for (const [key, value] of keys) {
      if (value === targetKey) {
        this.table.set(key, targetValue);
      }
    }
  }
  delete(r, c) {
    const target = r + "," + c;
    const keys = this.table.entries();
    for (const [key, value] of keys) {
      if (value === target) {
        this.table.delete(key);
      }
    }
  }
}

function updateArr(arr, value1, value2) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === value1) arr[i][j] = value2;
    }
  }
}

function solution(commands) {
  const board = Array.from({ length: 51 }, () => Array(51).fill());
  const table = new Table();
  const result = [];

  for (const el of commands) {
    const cmd = el.split(" ");
    switch (cmd[0]) {
      case "UPDATE": {
        let [r, c, value] = cmd.slice(1);
        if (cmd.length === 4) {
          let flag = table.get(r, c);
          if (flag) [r, c] = flag;
          board[+r][+c] = value;
        } else {
          updateArr(board, r, c);
        }
        break;
      }
      case "MERGE": {
        const [r1, c1, r2, c2] = cmd.slice(1);
        if (
          (r1 === r2 && c1 === c2) ||
          (table.has(r1, c1) &&
            table.has(r2, c2) &&
            table.get(r1, c1).join("") === table.get(r2, c2).join(""))
        )
          break;
        if (!table.has(r1, c1)) {
          table.set(r1, c1, r1, c1);
        }
        const [idx1, idx2] = table.get(r1, c1).map(Number);
        if (table.has(r2, c2)) {
          const [idx3, idx4] = table.get(r2, c2).map(Number);
          if (!board[idx1][idx2]) {
            board[idx1][idx2] = board[idx3][idx4];
          }
          board[idx3][idx4] = undefined;
          table.update(idx3, idx4, idx1, idx2);
        } else {
          if (!board[idx1][idx2]) {
            board[idx1][idx2] = board[r2][c2];
          }
          board[r2][c2] = undefined;
          table.set(r2, c2, idx1, idx2);
        }
        break;
      }
      case "UNMERGE": {
        let [r, c] = cmd.slice(1);
        const flag = table.get(r, c);
        if (flag) {
          const [x, y] = flag;
          if (!(r === x && c === y)) {
            board[+r][+c] = board[+x][+y];
            board[+x][+y] = undefined;
          }
          table.delete(x, y);
        }
        break;
      }
      case "PRINT": {
        let [r, c] = cmd.slice(1);
        const flag = table.get(r, c);
        if (flag) [r, c] = flag;
        result.push(board[+r][+c] ? board[+r][+c] : "EMPTY");
        break;
      }
    }
  }
  return result;
}
