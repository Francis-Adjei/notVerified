function numberOfOccurrences(n){
    
    let temp=[];
    let counter=0
    for(let i=0; i<=n; i++){
        temp.push(i.toString());
    }
    const countOccurrences = (arr, val) => arr.filter(item => item === val).length;
    temp.forEach(e=>{  
      let a=Array.from(e);    
      if(countOccurrences(a,'0')){
          counter+=countOccurrences(a,'0')        
    }
      if(countOccurrences(a,'4')){
            counter+=countOccurrences(a,'4')
       }
      if(countOccurrences(a,'2')){
            counter+=countOccurrences(a,'2')
        }
    })
    return counter
}
console.log(numberOfOccurrences(-5));