var sortSentence = function(s) {
  return s.split(' ').sort((a,b)=>a.slice(-1)-b.slice(-1)).map(ele=>ele.slice(0,-1)).join(' ')
  
};