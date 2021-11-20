let resultArray=[];
    let checkLength;
    let nextString;
    
if(inputString.includes('(')){
            
    let openPSplit=inputString.split('(');
    console.log(openPSplit)
    let closePSplit = openPSplit[-1].split(')');
    openPSplit.splice(-1,1);
    let cl=openPSplit.length;
    let ol=closePSplit.length;
    
            
    for(let i=0; i<cl-1;i++){
        if(i===0){
            let getString = Array.from(closePSplit[1]).reverse();
             resultArray=[...getString];
        if(cl > i+2){
            nextString=Array.from(ol-2).concat(getString).concat(Array.from(closePSplit[i+2]))
        }
        }
        else{
            let getString=nextString.reverse();
            resultArray=[...getString];
            if(cl > i+2){
            nextString=Array.from(openPSplit[ol-i-2]).concat(getString).concat(Array.from(closePSplit[i+2]))
        }
            
        }              
         }
         return resultArray.join('')
            
        }