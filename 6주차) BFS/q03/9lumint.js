const isSameTree = function(p, q) {
    const queue = [];
    queue.push({ node1: p, node2: q});
    while (queue.length) {
        const { node1, node2 } = queue.shift();
        if (!node1 && !node2) {
            continue;
        } else if ((!node1 || !node2) || (node1.val !== node2.val)) {
            return false;
        } else {
            queue.push({ node1: node1.left, node2: node2.left });
            queue.push({ node1: node1.right, node2: node2.right });
        }
    }
    return true;
};
