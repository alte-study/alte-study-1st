function minus (arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) >= 0){
            arr1.splice(arr1.indexOf(arr2[i]), 1); 
        } 
    } 
    return arr1;
};

const relativeSortArray = function(arr1, arr2) {
    minus(arr1, arr2).sort((a, b) => a - b);
    for(let i = 0; i < arr1.length; i++){
        if(arr2.lastIndexOf(arr1[i]) >= 0){
            arr2.splice(arr2.lastIndexOf(arr1[i]) + 1, 0, arr1[i]);
        } else {
            arr2.push(arr1[i]);
        }
    }
    return arr2;
};
