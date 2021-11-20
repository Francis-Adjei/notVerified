
  function oddOccurrencesOfZeros(a){
    let c=a.toString.sp
    let counter =0;
    let result =0;

    a.forEach(e=>{
         e= e.toString();
        a = e.split('')
        a.toString().split('').forEach(b=>{
            if(b==='0'){
                counter++
            }          
        })
        if(counter%2===1){
            result++;
            counter=0
        }
    })
    return result;
}

 console.log(oddOccurrencesOfZeros([4,50,100,65,2000]));