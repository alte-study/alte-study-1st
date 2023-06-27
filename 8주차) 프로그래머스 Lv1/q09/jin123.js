function solution(n, arr1, arr2) {
  const result = Array(n).fill();
  return result.map((_, i) => {
    let line = Array(n).fill(" ");
    const arr1_b = arr1[i].toString(2);
    const arr2_b = arr2[i].toString(2);
    const startIdx1 = n - arr1_b.length;
    const startIdx2 = n - arr2_b.length;

    for (let j = startIdx1; j < n; j++) {
      if (arr1_b[j - startIdx1] === "1") line[j] = "#";
    }

    for (let k = startIdx2; k < n; k++) {
      if (arr2_b[k - startIdx2] === "1") line[k] = "#";
    }
    return line.join("");
  });
}
