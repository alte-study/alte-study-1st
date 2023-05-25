const searchMatrix = function(matrix, target) {
    let arr = matrix.flat();
    return arr.indexOf(target) === -1 ? false : true;
};
