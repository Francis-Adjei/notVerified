function obtainUniqueSequence(arr){
    let counter=0;
    acc=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j){
                if(arr[i]===arr[j]){
                    arr[j]++;
                    counter++
                }
            }
        }
    }
    function check(){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(i!==j){
                    if(arr[i]===arr[j]){
                        arr[j]++;
                        counter++
                    }
                }
            }
        }   
    } 
    acc+=counter;
    if (counter!==0){
       counter=0;
        check();
    }  
    return acc;
}
console.log( obtainUniqueSequence([5,1,2,4,5,2]))