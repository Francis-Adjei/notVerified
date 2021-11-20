function canMakeTriangle (arr){
        resultArray = [];
    
        for(let i=0; i<arr.length -2; i++){
            let a=arr[i];
            let b=arr[i+1];
            let c=arr[i+2];
            if((a+b>c) && (a+c>b)&&(b+c>a)){
                resultArray.push(1)
            }
            else{resultArray.push(0)}

        }
        return resultArray;
   
}
console.log(canMakeTriangle([1,2,2,4]))