const hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right && targetSum === root.val) {
    return true;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
