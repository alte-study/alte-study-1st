function solution(users, emoticons) {
  let subscriber = 0;
  let totalP = 0;
  const dfs = (index, total) => {
    if (index === emoticons.length) {
      let newSubscriber = 0;
      let tempTotalPrice = 0;
      total.forEach(
        (el, i) =>
          users[i][1] <= el ? newSubscriber++ : (tempTotalPrice += el),
        0
      );

      if (
        subscriber < newSubscriber ||
        (subscriber === newSubscriber && totalP < tempTotalPrice)
      ) {
        subscriber = newSubscriber;
        totalP = tempTotalPrice;
      }
      return;
    }
    for (let i = 40; i >= 10; i -= 10) {
      let newTotal = total.map((el, j) => {
        if (users[j][0] <= i) {
          return el + (emoticons[index] * (100 - i)) / 100;
        }
        return el;
      });
      dfs(index + 1, newTotal);
    }
  };
  dfs(0, Array(users.length).fill(0));
  return [subscriber, totalP];
}
