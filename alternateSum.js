function alternateMatrixSum(n){

    return eval(n.toString().split('').map((e,i)=>i%2===0 && i !==0?'-'+e:'+'+e).join(''))
}
console.log(alternateMatrixSum(11359))