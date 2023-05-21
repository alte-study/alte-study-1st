/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let pathArr = path.split("/");
  return (
    "/" +
    pathArr
      .reduce((acc, cur) => {
        if (cur === "..") acc.pop();
        else if (cur && cur !== ".") acc.push(cur);
        return acc;
      }, [])
      .join("/")
  );
};
