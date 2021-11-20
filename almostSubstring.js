function almostSubstring(t, s){
    let counter = 0;
    for(let i = 0; i < t.length; i++){
        if(t[i]+t[i+2]+t[i+4] === s){
            counter++;
        }
    }
    return counter;
} 