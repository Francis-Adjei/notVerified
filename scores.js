function scores(ops){
        record=[];
        let b=0;
       for(let i=0;i<ops.length;i++){
        if(!isNaN(ops[i])){record.push(+ops[i] );}
        else{operations(ops[i])}
       console.log(record);
       }
    
        function operations(s){
            switch(s){
                case 'D':  b=record[record.length-1]; record.push(2*b);
                    break;
                case '+':   b=record[record.length-1]+record[record.length-2]; record.push(b);
                    break;
                case 'C': record.pop();
            }
        }
        
    
        return record.reduce((a,b)=>a+b)
    }
    console.log(scores(['5','2','C','D','+']))