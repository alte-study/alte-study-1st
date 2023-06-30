function solution(s) {
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let memo = "",
    answer = s;
  for (let i = 0; i < s.length; i++) {
    if (!Number(s[i]) && Number(s[i]) !== 0) {
      memo += s[i];
    }
    if (nums[memo] !== undefined) {
      answer = answer.replace(memo, nums[memo]);
      memo = "";
    }
  }
  return Number(answer);
}
