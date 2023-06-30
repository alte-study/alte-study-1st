function mod(n, m) {
    return n % m ? mod(m, n % m) : m;
}

function solution(n, m) {
   let big = mod(Math.max(n, m), Math.min(n, m)), small = n * m  / big;    
    return [big, small];
}
