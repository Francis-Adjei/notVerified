function pictureFrame(n){
    let result=[];
    let mid=[];
    let topndown=''
    for(let i=0; i<n; i++){
        topndown += '*';
    }
    for(let i =0; i<n; i++){
        if(i===0||i===n-1){
           result.push([topndown]);

        }else{
            let x=' '
            x=x.repeat(n-2)
            result.push(['*'+x+'*']);
        }
    }
    return result;

}
console.log(pictureFrame())