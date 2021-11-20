function doubles(a){
    let counter=0;

    for( let i = 0; i<a.length; i++){
        item= a[i];
        for(let j=i+1;j< a.length; j++){
            if(item===a[j]){
                a.splice(j,1);
                counter++; 
                break;
            }
        }
    }
    return counter

}
doubles([1,1,1,2,2,4,4,7,9,9,8,8,8])
