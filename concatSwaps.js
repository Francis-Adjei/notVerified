function concatSwaps(s, sizes){
    
    let d=Array.from(s)
    let result=[];
    let c;
    let posn=0;
    for(let i=0; i<sizes.length; i++){
         c = d.splice(0,sizes[i]);
        result.push(c.join(''))
    }
     console.log(result)
    result.forEach((e,i)=>{
        if(i%2===0){
            [result[i],result[i-1]]=[result[i-1],result[i]]
        }
    })
    return result;
   
    
}
console.log(concatSwaps('descognail',[3,2,3,1,1]))