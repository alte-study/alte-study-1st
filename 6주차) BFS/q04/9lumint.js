const mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2;
  } else if (!root2) {
    return root1;
  }
  const answer = root1, queue = [];
  queue.push({ node1: answer, node2: root2 });
  while (queue.length) {
    const { node1, node2 } = queue.shift();
    node1.val += node2.val;
    if (node2.left) {
      if (!node1.left) {
        node1.left = node2.left;
      } else {
        queue.push({ node1: node1.left, node2: node2.left });
      }
    }
    if (node2.right) {
      if (!node1.right) {
        node1.right = node2.right;
      } else {
        queue.push({ node1: node1.right, node2: node2.right });
      }
    }
  }
  return answer;
};
