function arrayChange(inputArray) {
    let counter=0;
    for(let i=0; i<inputArray.length-1; i++){
        if(inputArray[i]>=inputArray[i+1]){
            inputArray[i+1] += 1;
            counter +=1;
            i -= 1;
        }
    }
    return counter;
 
 }