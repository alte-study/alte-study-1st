const dailyTemperatures = function (temperatures) {
  let answer = new Array(temperatures.length).fill(0),
    idx = 0,
    bigger = false,
    target;
  while (temperatures.length > 1) {
    target = temperatures.shift(0);
    for (let i = 0; i < temperatures.length; i++) {
      if (target < temperatures[i]) {
        answer[idx] = i + 1;
        idx++;
        bigger = true;
        break;
      }
    }
    bigger ? (bigger = false) : idx++;
  }
  return answer;
};
