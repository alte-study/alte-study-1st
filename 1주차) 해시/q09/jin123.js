const fs = require("fs");
const [T, ...note] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const result = [];

for (let i = 0; i < T; i++) {
  const note1Idx = i * 4 + 1;
  const note2Idx = note1Idx + 2;
  const newNote = new Set(note[note1Idx].split(" "));
  note[note2Idx]
    .split(" ")
    .forEach((el) => result.push(newNote.has(el) ? 1 : 0));
}
console.log(result.join("\n"));
