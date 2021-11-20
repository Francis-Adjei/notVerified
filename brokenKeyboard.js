function brokenKeyboard(text,letters){
    text=text.toLowerCase();
    letters.push(',');
    letters.push('.');
    let rString=[]
    sa=text.split(' ');
    console.log(text)
     for(let i = 0; i<sa.length; i++){
         s2=sa[i].split('');
         console.log(s2)
         for(let j = 0; j<s2.length; j++){
             console.log(s2[j])
            if(letters.includes(s2[j])===false){
                console.log(s2[j])
               
                break;
                
            }else if(j===s2.length-1){
                rString.push(sa[i])
                console.log(s2[j])
            }
         }

     }
     console.log(rString)
     return rString.length
}
console.log(brokenKeyboard('Hello, this is Codesignal',['e','i','h','l','o','s']))