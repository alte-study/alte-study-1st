const groupAnagrams = function (strs) {
  let dic = {};
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i]
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    dic[key] === undefined ? (dic[key] = [strs[i]]) : dic[key].push(strs[i]);
  }
  return Object.values(dic);
};
