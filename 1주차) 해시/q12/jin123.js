function solution(genres, plays) {
  let idxArr = new Array(genres.length).fill().map((_, i) => i);
  const genrePlays = {},
    result = {};
  genres.forEach((el, i) => {
    result[el] = 0;
    genrePlays[el] ? (genrePlays[el] += plays[i]) : (genrePlays[el] = plays[i]);
  });
  return idxArr
    .sort((prev, cur) => {
      const genresNum = genrePlays[genres[cur]] - genrePlays[genres[prev]];
      if (genresNum) return genresNum;

      const playNum = plays[cur] - plays[prev];
      if (playNum) return playNum;

      return prev - cur;
    })
    .filter((el) => {
      if (result[genres[el]] === 2) return false;
      else {
        result[genres[el]]++;
        return true;
      }
    });
}
