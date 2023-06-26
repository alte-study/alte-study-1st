function solution(numbers) {
  const newNumbers = new Set(numbers);
  return Array(10)
    .fill()
    .reduce((acc, _, i) => (newNumbers.has(i) ? acc : acc + i), 0);
}
