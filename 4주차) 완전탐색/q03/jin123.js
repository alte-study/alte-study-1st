const fs = require("fs");
let [L, _, ...letters] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);
L = +L;
let vowel = new Set(["a", "e", "i", "o", "u"]);
let result = [];
letters.sort();

const helper = (index, password, count = [0, 0]) => {
  if (password.length === L) {
    if (count[0] >= 1 && count[1] >= 2) {
      result.push(password);
    }
    return;
  }
  while (index < letters.length) {
    let newCount = [...count];
    vowel.has(letters[index]) ? newCount[0]++ : newCount[1]++;
    helper(index + 1, password + letters[index], newCount);
    index++;
  }
};
helper(0, "");
console.log(result.join("\n"));
