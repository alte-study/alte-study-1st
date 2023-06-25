function solution(N, number) {
    const dp = new Array(9).fill(0).map(el => new Set());
    for(let i = 1; i < 9; i++){
        dp[i].add('1'.repeat(i) * N);
        for(let j = 1; j < i; j++){
            for(const el1 of dp[j]){
                for(const el2 of dp[i - j]){
                    dp[i].add(el1 + el2);
                    dp[i].add(el1 - el2);
                    dp[i].add(el1 * el2);
                    dp[i].add(el1 / el2);
                }
            }
        }
        if(dp[i].has(number)){
            return i;
        }
    }
    return -1;
}
