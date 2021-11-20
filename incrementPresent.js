function solution(A){       //innocent
    let counter=[0,0]; //counting flips here
    let m = A.map((e,i)=>i%2===0?0:1); //generate our own perfect arrangement
    let n = A.map((e,i)=>i%2===0?1:0);
    A.forEach((e,i)=>{
       if(e!==m[i]){counter[0]++} //compare and count
       if(e!==n[i]){counter[1]++}
    })
    return Math.min(...counter)

}
console.log(solution([1,0,1,0,1,1]))
