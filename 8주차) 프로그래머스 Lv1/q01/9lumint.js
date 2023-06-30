function minimum(keymap, target) {
  let click = Array(keymap.length).fill(0);
  for (let i = 0; i < keymap.length; i++) {
    if (keymap[i].indexOf(target) !== -1)
      click[i] = keymap[i].indexOf(target) + 1;
  }
  click = click.filter((el) => el > 0);
  return click.length ? Math.min(...click) : -1;
}

function solution(keymap, targets) {
  let answer = Array(targets.length).fill(0);
  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      if (minimum(keymap, targets[i][j]) === -1) {
        answer[i] = -1;
        break;
      } else {
        answer[i] += minimum(keymap, targets[i][j]);
      }
    }
    if (answer[i] === -1) {
      continue;
    }
  }
  return answer;
}
