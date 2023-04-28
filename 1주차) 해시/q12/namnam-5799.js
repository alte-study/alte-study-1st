### 문제 설명&링크
* 문제 이름: ex) 프로그래머스 lv3. <베스트앨범> 
* 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript#

### 의사 코드
0. 가장 인기있는 장르를 확인하기 위해 dict 객체 변수에 plays 누적합을 저장합니다. 
1. 장르별로 곡을 담기 위해서 dict2에 dict의 키를 복사하여 빈 배열로 값을 초기화합니다.
   1-1. 이때 재생 횟수를 확인하기 위해 객체 값을 내림차순으로 정렬합니다. 
2. dict2 객체를 돌면서 해당 plays 수를 가진 인덱스를 추출합니다. 
   2 -1. 이때 두번째 인덱스가 먼저 출력되지 않기 위해서 두 개의 반복문을 사용합니다. 
   2-2. 장르에 속한 곡이 하나라면 하나의 곡만 선택해야 하므로 마지막 배열의 값과 같지 않아야 한다는 조건을 걸어줍니다.  


### 코드
```js
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
```

### 느낀점&어려웠던 점
객체의 정렬을 다루는 부분이 어려줘서 자주자주 보면서 복습해야겠습니다 ! 

