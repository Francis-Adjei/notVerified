function produceMaximalNumber(numbers){
    
    while(numbers.length>1){
        let m=2*Math.min(numbers[0],numbers[1])
        numbers.splice(0,2)
        numbers.unshift(m)  
    }
    return numbers[0]
}
console.log(produceMaximalNumber([2,1,4,5]))