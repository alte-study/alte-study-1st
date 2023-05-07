
function solution(genres, plays) {
    // 장르별 노래 횟수를 체크하기 위해서 객체를 사용합니다. 
    
    let dict = {}
    
    genres.map((el,index)=> 
        el in dict ? dict[el] += plays[index] : dict[el] = plays[index]
    )
    
    dict = Object.entries(dict)
        // sort 함수를 이용하여 내림차순으로 정렬
        .sort(([,a],[,b])=> b-a)
    
        // reduce를 이용하여 정렬된 배열을 다시 객체로 변환
        .reduce((dict,[key, value])=> ({ ...dict, [key]: value }), {})
    
    let dict2 = {}
    for(let k in dict){
        dict2[k] = []
    }
    
    for(let i = 0 ; i < Object.keys(dict).length ; i ++ ){
        
        for(let j = 0 ; j < genres.length ; j++){
            
            // dict[i]와 일치하는 것끼리 정리
            if(Object.keys(dict)[i] === genres[j]){
                // 해당 값을 push 후 정렬할 예정입니다. 
                dict2[genres[j]].push(plays[j])
            }
                
        }    
    }
    
    // 배열의 값을 내림차순으로 정렬합니다. 
    for (let key in dict2) {
      dict2[key] = dict2[key].sort((a, b) => b - a);
    }
    
    let answer = []
    // dict2 객체를 돌면서 인덱스를 추출합니다. 
    for(let i = 0 ; i<Object.keys(dict2).length; i++){
        
        for(let j = 0 ; j < genres.length ; j++){
        
            // 첫번째 값과 같은 인덱스를 찾습니다. 
            if(Object.values(dict2)[i][0] == plays[j]){
                answer.push(j);
               break
            }
        }
     
        for(let j = 0 ; j < genres.length ; j++){
            // 두번째 값과 같은 인덱스를 찾습니다. 
            if(Object.values(dict2)[i][1] == plays[j] && j !==  answer[answer.length-1]){
                answer.push(j);
               break
            }
        }
    }
    return answer
    
    
}