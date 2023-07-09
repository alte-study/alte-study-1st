function solution(cacheSize, cities) {
  const cache = new Map();
  if (!cacheSize) return cities.length * 5;
  return cities.reduce((acc, originCur, i, arr) => {
    const cur = originCur.toUpperCase();
    if (cache.has(cur)) {
      cache.delete(cur);
      cache.set(cur, true);
      acc++;
    } else {
      if (cache.size >= cacheSize) {
        cache.delete(cache.keys().next().value);
      }
      cache.set(cur, true);
      acc += 5;
    }
    return acc;
  }, 0);
}
