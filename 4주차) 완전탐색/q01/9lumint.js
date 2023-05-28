const maxArea = function (height) {
  let maxArea = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    height[i] < height[j] ? i++ : j--;
  }
  return maxArea;
};
