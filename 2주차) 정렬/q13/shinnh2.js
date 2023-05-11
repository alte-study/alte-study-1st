/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
	let arr = s.split(" ");
	return arr
		.sort((a, b) => +a.slice(-1) - +b.slice(-1))
		.map((el) => el.slice(0, -1))
		.join(" ");
};
