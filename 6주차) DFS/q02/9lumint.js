const maxDepth = function (root) {
  let max = 0;
  const dfs = function (root, depth) {
    if (!root) {
      max = Math.max(depth, max);
      return;
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };
  dfs(root, 0);
  return max;
};
