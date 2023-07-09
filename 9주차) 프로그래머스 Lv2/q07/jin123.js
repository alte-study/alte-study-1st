function solution(n, info) {
  let maxScoreDiff = 0;
  let result = [-1];
  const apeachTotalScore = info.reduce(
    (acc, cur, i) => (cur && i < 10 ? acc + 10 - i : acc),
    0
  );

  const dfs = (lion, index, arrowN, lionS, apeachS) => {
    if (!arrowN || index === -1) {
      if (maxScoreDiff < lionS - apeachS) {
        maxScoreDiff = lionS - apeachS;
        result = [...lion];
        result[10] = arrowN;
      }
      return;
    }
    lion[index] = info[index] + 1;
    if (arrowN - lion[index] >= 0)
      dfs(
        lion,
        index - 1,
        arrowN - lion[index],
        lionS + 10 - index,
        info[index] ? apeachS - 10 + index : apeachS
      );
    lion[index] = 0;
    dfs(lion, index - 1, arrowN, lionS, apeachS);
  };
  dfs(Array(11).fill(0), 9, n, 0, apeachTotalScore);
  return result;
}
