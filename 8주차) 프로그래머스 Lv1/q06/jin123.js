function solution(lottos, win_nums) {
  let erased = 0;
  let matched = 0;
  const win_set = new Set(win_nums);
  const rank = [6, 6, 5, 4, 3, 2, 1];
  lottos.forEach((el) => {
    if (!el) {
      erased++;
      return;
    }
    if (win_set.has(el)) {
      matched++;
    }
  });
  return [rank[matched + erased], rank[matched]];
}
