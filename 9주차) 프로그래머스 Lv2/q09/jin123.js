function getInterval(a, b) {
  const [h1, m1] = a.split(":");
  const [h2, m2] = b.split(":");
  return (h2 - h1) * 60 + (m2 - m1);
}
function getNotes(value, notesRange) {
  let Notes = [];
  for (let i = 0; i < notesRange; i++) {
    if (value[i] === "#") notesRange++;
    Notes.push(value[i]);
  }
  return Notes.join("");
}
function solution(m, musicinfos) {
  const newMusicinfos = musicinfos.map((el) => el.split(","));
  const pattern = new RegExp(m + "(?!#)");

  const result = newMusicinfos.filter((el) => {
    const playTime = getInterval(el[0], el[1]);
    const noteCount = el[3].split("#").join("").length;
    if (playTime < noteCount) {
      const slicedNotes = getNotes(el[3], playTime);
      if (slicedNotes.match(pattern)) return true;
    } else {
      const repeatTime = Math.floor(playTime / noteCount);
      const restNotesRange = playTime - repeatTime * noteCount;
      const restNotes = getNotes(el[3], restNotesRange);
      const newEl = el[3].repeat(repeatTime) + restNotes;
      if (newEl.match(pattern)) return true;
    }
    return false;
  });
  result.sort((a, b) => getInterval(b[0], b[1]) - getInterval(a[0], a[1]));
  return result.length ? result[0][2] : "(None)";
}
