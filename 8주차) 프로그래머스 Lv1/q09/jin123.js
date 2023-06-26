function solution(n, arr1, arr2) {
  const result = Array(n).fill();
  return result.map((_, i) => {
    let line = Array(n).fill(" ");
    const arr1_b = arr1[i].toString(2);
    const arr2_b = arr2[i].toString(2);
    const startIdx1 = n - arr1_b.length;
    const startIdx2 = n - arr2_b.length;

    for (let i = startIdx1; i < n; i++) {
      if (arr1_b[i - startIdx1] === "1") line[i] = "#";
    }

    for (let i = startIdx2; i < n; i++) {
      if (arr2_b[i - startIdx2] === "1") line[i] = "#";
    }
    return line.join("");
  });
}
