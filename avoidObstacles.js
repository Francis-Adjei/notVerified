function avoidObstacles(inputArray) {
    inputArray.sort(function(a,b){return a-b})
   let factor = 1;
   for(let i=0; i<=inputArray[inputArray.length-1];i+=factor){
       if(inputArray.includes(i)){
          i=0;
          factor+=1;
       }
   }
   return factor;
}
