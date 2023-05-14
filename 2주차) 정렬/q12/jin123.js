/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  intervals.forEach((el) => {
    let resultLastI = result.length - 1;
    if (result[resultLastI][1] >= el[0]) {
      result[resultLastI][1] = Math.max(el[1], result[resultLastI][1]);
    } else {
      result.push(el);
    }
  });
  return result;
};
