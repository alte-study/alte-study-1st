function solution(name) {
  let diff = 0;
  let count = 0;
  let fIndex = 0;
  let aBlocks = []; //[findex,count]
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A" && i > 0) {
      if (!count) fIndex = i;
      count++;
    }
    if (count && name[i] !== "A") {
      aBlocks.push([fIndex, count]);
      count = 0;
    }
    const charCode = name[i].charCodeAt(0);
    diff += charCode <= 78 ? charCode - 65 : 91 - charCode;
  }
  if (count) aBlocks.push([fIndex, count]);

  let min = Math.min(
    ...aBlocks.map(
      (el) => Math.min(el[0] - 1, name.length - el[0] - el[1]) - el[1]
    )
  );

  return diff + name.length - 1 + (min < 0 ? min : 0);
}
