function sum(arr) {
  return arr.reduce((a, c) => a + c);
}

function solution(queue1, queue2) {
  let sum1 = sum(queue1),
      sum2 = sum(queue2),
      target = (sum1 + sum2) / 2,
      pointer1 = 0,
      pointer2 = queue1.length,
      queue = [...queue1, ...queue2];

  for (let count = 0; count < queue1.length * 3; count++) {
    if (sum1 === target) {
      return count;
    }
    sum1 > target ? (sum1 -= queue[pointer1++]) : (sum1 += queue[pointer2++]);
  }
  return -1;
}
