function palindromeRearranging(inputString) {
    let inputArray=Array.from(inputString)
    let slen=inputString.length;
    let flen=(slen/2)+1;

    if(slen > 1){
        for(let i=0;i<inputArray.length;i++){
        let item = inputArray[i];
        for(let j=i+1; j< inputArray.length; j++){
            if(item===inputArray[j]){
                inputArray.splice(j,1);
                inputArray.splice(i,1);
                j=inputArray.length;
                i=i-1
            }
        }
        }
    if(inputArray.length===0|| inputArray.length===1){
        return true;
    }else{
        return false;
    }
        
    }else{
        return true
    }
}
