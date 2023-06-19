const tribonacci = function(n) {
    let tribo = [0, 1, 1], idx = 2;
    if (n <= 2) {
        return tribo[n];
    }
    while (idx < n) {
        idx++;
        tribo[idx] = tribo[idx - 1] + tribo[idx - 2] + tribo[idx - 3];
    }
    return tribo[idx];
};
