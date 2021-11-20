function goodTuple(a){

    const countOccurrences = (arr, val) => arr.filter(item => item === val).length;
    let counter=0;

    for(let i=0; i<a.length-2; i++){
        let x=a[i]; let y=a[i+1]; let z=a[i+2];
        let m=[x,y,z];
        let q=countOccurrences(m,m[0]);
        let r=countOccurrences(m,m[1]);
        let s=countOccurrences(m,m[2]);
        if(q===2||r===2||s===2){
            counter++;
        }
    }
    return counter
}
console.log(goodTuple([]))