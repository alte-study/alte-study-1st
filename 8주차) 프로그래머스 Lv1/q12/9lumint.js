function solution(numbers, i = 2) {
    let sum = 1;
    while(i < 10){
        sum += i;
        i++;
    }
    return sum - numbers.reduce((a, c) => a + c);
}
