const _=require('lodash');

function areSimilar(a, b) {
    let disimilarCounter = 0;
    let disimilarsa=[];
    let disimilarsb=[];
    
    if(a.length === b.length){
        if(!_.isEqual(a, b)){
            
        for(let i=0; i<a.length; i++){
            if(a[i] !== b[i]){
                disimilarCounter +=1
                disimilarsa.push(a[i]);
                disimilarsb.push(b[i]);           
            }
        }
        if (disimilarCounter < 3){
            if(disimilarsa[0]===disimilarsb[1]
                && disimilarsa[1]===disimilarsb[0]){
                    return true;
                } else {
                    return false
                }
            
        }else{
            return false;
        }
        
            
        }else{
            return true;
        }
    }
    else {
        return false
    }
    }
    
   

