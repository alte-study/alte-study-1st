function solution(n) {
    let nums = 1;
     while(nums >= 1){
         if(n % nums === 1){
             return nums;
         }
         nums++;
     }
}
