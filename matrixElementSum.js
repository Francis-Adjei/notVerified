function matrixElementsSum(matrix) {
    size=[matrix.length, matrix[0].length];
    let total=0;
    
    for(let i = 0; i<size[0]; i++){
        for(let j = 0; j<size[1]; j++){ 
            if((matrix[i][j]===0 || matrix[i][j]==='u'  )&& i!==size[0]-1){ 
                matrix[i+1][j]='u'                       
            }
            if(typeof matrix[i][j] === 'number'){
                   total +=matrix[i][j]; 
                }          
        }     
    }
    return total;
    

}