function checkPalindrome(inputString) {
    
    if(Array.from(inputString).reverse().join('')===inputString){
        return true;
    }
    else 
    {return false}
}