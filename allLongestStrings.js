function allLongestStrings(inputArray) {
    let resultArray = [];
    let maxLength = 0;
    for(let i =0; i<inputArray.length; i++){
        if(inputArray[i].length > maxLength){
            maxLength = inputArray[i].length
        }
            
        }
        console.log (maxLength)
        
       return inputArray.filter(element=>element.length===maxLength)
       
    }
    
    