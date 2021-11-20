function almostIncreasingSequence(sequence) {
    counter = 0;
    let copy =[ ...sequence];
    for(i = 0; i<sequence.length; i++){
        if(sequence[i+1]<=sequence[i]){
            
            copy.splice(i+1,1);
            let noted = i;
            for(j =0;j<copy.length; j++){
                if(copy[j+1]<=copy[j]){
                    if(noted===j){
                        copy=[...sequence];
                        copy.splice(j,1);
                        for(let m =0;m<copy.length; m++){
                            if(copy[m+1]<=copy[m]){return false;}
                        }
                        return true;
                    }
                    return false;        
                }
            }
           
            
        }
     
    }
    return true;
    }
    