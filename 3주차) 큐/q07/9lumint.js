const deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  let answer = [];
  answer.push(deck.pop());

  while (deck.length) {
    if (answer.length > 1) {
      answer.unshift(answer.pop());
    }
    answer.unshift(deck.pop());
  }
  return answer;
};
