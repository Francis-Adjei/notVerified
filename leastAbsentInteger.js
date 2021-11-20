function solution(A){
    B=A.filter(a=> a>0);
    B.sort((a,b)=>a-b);
    if(B===[]){
        return 1
    }else{
         for(let i=0; i<B.length; i++){         
             if(B[i+1]-B[i]===1||B[i+1]-B[i]===0){          
            }else{
                return B[i]+1
            }         
         }
         return B[-1]+1;
    }   
}
console.log(solution([1,2,3,4,7,5,6,6,6,6,6]))