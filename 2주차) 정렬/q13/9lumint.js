const sortSentence = function(s) {
    let reverse_s = s.split('').reverse().join('').split(' ');
    reverse_s.sort((a, b) => +b[0] - +a[0]);
    return reverse_s.map(el => el.slice(1)).join(' ').split('').reverse().join('');
};
