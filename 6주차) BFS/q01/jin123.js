const fs = require("fs");
const [NM, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);
const maze = arr.map((el) => el.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(M));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const queue = new Queue();
queue.enqueue([0, 0]);
visited[0][0] = true;

while (queue.size) {
  let node = queue.dequeue();

  for (let i = 0; i < 4; i++) {
    let xCoord = node[0] + directions[i][0],
      yCoord = node[1] + directions[i][1];

    if (xCoord === N - 1 && yCoord === M - 1) {
      console.log(maze[node[0]][node[1]] + 1);
      return;
    }
    if (
      xCoord >= 0 &&
      xCoord < N &&
      yCoord >= 0 &&
      yCoord < M &&
      !visited[xCoord][yCoord] &&
      maze[xCoord][yCoord] > 0
    ) {
      queue.enqueue([xCoord, yCoord]);
      visited[xCoord][yCoord] = true;
      maze[xCoord][yCoord] = maze[node[0]][node[1]] + 1;
    }
  }
}
