function adjacentElementsProduct(inputArray) {
    let result = [];
    for(let i =0;i<inputArray.length-1;i++){
        result.push(inputArray[i]*inputArray[i+1])
    }
    return Math.max(...result);
}