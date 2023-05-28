function solution(numbers) {
  let result = new Set();
  (function combine(arr, combo) {
    const num = +combo;
    if (num && isPrime(num)) {
      result.add(num);
    }

    for (let i = 0; i < arr.length; i++) {
      combine(
        arr.filter((_, idx) => idx !== i),
        combo + arr[i]
      );
    }
  })(numbers.split(""), "");
  return result.size;
}
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
