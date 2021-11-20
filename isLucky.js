function isLucky(n) {
    nString = n.toString();
    half=nString.length/2-1;
    let sum1=0;
    let sum2=0;
    
    Array.from(nString).forEach((element,index)=>{
        if(index <= half){
            sum1+= (+element);
        } else{
            sum2+=(+element);
        }
    })
    console.log(sum1);
    console.log(sum2);
    return sum1===sum2;
}