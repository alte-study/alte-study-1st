function solution(nums) {
  let typeArr = [...new Set(nums)];
  return typeArr.length > nums.length / 2 ? nums.length / 2 : typeArr.length;
}
