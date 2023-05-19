const findTheWinner = function (n, k) {
  let friends = Array.from(new Array(n), (x, i) => i + 1);
  while (friends.length > 1) {
    for (let i = 1; i < k; i++) {
      friends.push(friends.shift());
    }
    friends.shift();
  }
  return friends[0];
};
