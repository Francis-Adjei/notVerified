function commonCharacterCount(s1, s2) {
    counter=0;
    s3 = Array.from(s2);
    Array.from(s1).forEach(element=>{
        let index = s3.findIndex(e=> e===element)
        if(index !== -1){
            counter++;
            s3.splice(index,1)
        }
    })
 return counter;
}