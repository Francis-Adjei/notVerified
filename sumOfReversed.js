function sumOfReversed(arr){ 
    let resultArray=[];
    arr.forEach( element=>{
       thisResult=Array.from(element.toString());
       result = thisResult.reverse();
       console.log(result);
       
        for(let i =0; i< result.length; i++){
            if(result[i]==='0'&& result.length>1){
                result.push('0');
                result.shift()
                i--;
                console.log(result)
            } 
            else break;
        }
        resultArray.push(result);
    }
    )
    let total = 0;
    resultArray.forEach(result=>{
   console.log(result)
        total+= (+result.join(''))
    })
    return total;
}
console.log(sumOfReversed([0,100,220]))