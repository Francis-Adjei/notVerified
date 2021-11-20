function miniMaxSum(arr) {
    // Write your code here
    let r=[];
    for(let i=0;i<arr.length;i++){
        r.push(arr.filter((e,j)=>j!==i).reduce((a,b)=>a+b))
    }
    console.log(Math.min(...r),Math.max(...r));
}
 miniMaxSum([1,3,5]);