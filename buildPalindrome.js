
function buildPalindrome(stringInput){
    let arr = Array.from(stringInput);
    arr.push('');
    for(let i = 0; i<stringInput.length-2; i++){     
        let sliceOff = arr.slice(0,i).reverse().join('');
        sliceOff=stringInput+sliceOff;
       
        if(checkPalindrome(sliceOff)===true){
           
            return sliceOff
        }
    }
    function checkPalindrome(inputString) {
        if(Array.from(inputString).reverse().join('')===inputString){
            return true;
        }
        else 
        {return false}
    }
}
console.log(buildPalindrome('abcdcggh'))