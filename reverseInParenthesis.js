function reverseInParentheses(inputString) {
    let inputArray=Array.from(inputString);
    
    openBArray=[];
    if(inputArray.includes(')')){
        inputArray.forEach(function(e,index){
            if(e==='('){
                openBArray.push(index)
            } else if(e===')'){
                let lastIndex=openBArray[openBArray.length-1];
                let nextCloseIndex = index;
                invertNow(lastIndex,nextCloseIndex);
                
            }
        })
        
        function invertNow(x,y){
            let inner = inputArray.slice(x,y+1);
            inner.reverse();
            for(let i = 0;i<inner.length; i++){
                inputArray[x+i]=inner[i];
            }
            openBArray.pop();
        }
    
    let finalResult=[]
    inputArray.forEach((el,index)=>{
        if(el!=="("&& el!==")"){
            finalResult.push(el)
        }      
    })
    return finalResult.join('');
        
    }else 
        {return inputString }
}