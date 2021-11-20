function makeArrayConsecutive2(statues) {
    let minInStatues=Math.min(...statues);
    let maxInStatues=Math.max(...statues);
    let complete = [];
    let result = []
    for(let i = minInStatues; i<maxInStatues;i++){
        complete.push(i)
    }
    complete.forEach(element => {
        if(!statues.includes(element)){
            result.push(element);
        }
    })
    return result.length;
   }