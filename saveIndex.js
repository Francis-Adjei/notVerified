function saveIndex(arr){
        return arr.map((e,i)=>e?i:false).filter(n=>n!==false)
    }