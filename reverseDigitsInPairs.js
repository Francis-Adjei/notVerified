 function reverseDigitsInPairs(n){
    let nArray = Array.from(n.toString())
    
    let result = [];
    let even = [];
    let odd = [];
    nArray.forEach((e,i)=>{
       if(i%2===0){
           even.push(e);
       } else{
           odd.push(e)
       }
    })
    console.log(even)
    console.log(odd)

    for(let i=0; i<even.length; i++){
       result.push(odd[i]);
       result.push(even[i])
    }
     return +result.join('');

}
console.log(reverseDigitsInPairs(123456))

