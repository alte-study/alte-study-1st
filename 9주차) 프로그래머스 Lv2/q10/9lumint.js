function solution(A,B){
    let newA = A.sort((a, b) => a - b), newB = B.sort((a, b) => b - a);
    return newA.reduce((a, c, idx) => a + (c * newB[idx]), 0);
}
