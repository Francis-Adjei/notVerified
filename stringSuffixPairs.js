function stringPrefixPairs(arr){
    let counter=0;

    const sf=(s1,s2)=>{
         let L; let S;
           if( s1.length>s2.length){
                L=s1;  S=s2;
           }else{
             L=s2;  S=s1;
           }
          
            let c=L.substr(-S.length)
            console.log(c)
            
            if(c===S){
                counter++;
            }
    }
    for(let i =0; i<arr.length;i++){
        arr.forEach((e,j )=> {

            if(i!==j){
                sf(arr[i],e)
            }
            
        });
    }
    return counter/2;


}