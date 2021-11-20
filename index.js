
function thisFunction(t,s){
    string1 = Array.from(s)
    let text = Array.from(t);
    let result=[];
    let stringResult;
    counter =0;
    for(let i =0; i<text.length; i++){
       result.push(text[i])
       result.push(text[i+2])
       result.push(text[i+4])
       result.join('');
       if(result===s){
           counter++;
       }

    }
    return counter;
}
console.log(thisFunction('azcabcab','acb'))