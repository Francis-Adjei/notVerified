function reverseInParentheses(inputString) {
    stringArray=Array.from(inputString);
    if(stringArray.includes('(')){
        let openBIndex=[];
        let closeBIndex=[];
        let searchPosnA=0;
        let searchPosnB=0;
        let i=0;      
        while(i<stringArray.length){
           let  index = stringArray.indexOf("(",searchPosnA);
            if(index !== -1){
                openBIndex.push(index);
                searchPosnA=index+1;
            } else{
                index = stringArray.indexOf(")",searchPosnB);
                if(index !== -1){
                    closeBIndex.push(index);
                    searchPosnB=index+1;
                }
                else {break;}
        }      
        i++
    }
    let obl = openBIndex.length;
    let cbl = closeBIndex.length;
 
for(let i=0; i<obl;i++){
    let inner=stringArray.slice(openBIndex[obl-1-i],closeBIndex[i]+1)
    inner.reverse();
    for(let j=0; j<inner.length; j++){
        stringArray[openBIndex[obl-1-i]+j]=inner[j];
        
    } 
}  
stringArray.forEach( (e,i)=>{
    if(e==='(' || e===')'){
        stringArray.splice(i,1);
        
    }
})
return stringArray.join('')
 

 }
}