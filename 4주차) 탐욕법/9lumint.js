function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;
  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.pop();
      people.shift();
    } else {
      people.pop();
    }
    answer++;
  }
  return answer;
}
