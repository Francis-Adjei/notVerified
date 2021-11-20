function solution(arr){
        counter=0;
        let m=arr.map(e=>e+1);
        console.log(m)
        m.forEach((e,i) => {
            arr.forEach((f,j)=>{
                if(i!==j){
                    if(f===e){
                        counter++
                    }
                }
            })
        });
        return counter;
    }