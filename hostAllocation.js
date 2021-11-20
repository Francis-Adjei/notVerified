

function hostAllocation(queries){
    var tracker = new Tracker();
    var results = [];
    queries.forEach(function(query){
        var [action, name] = query.split(' ');
        if(action ==='A') {
            results.push(tracker.allocate(name));
        }else if(action === 'D') {
            tracker.deallocate(name);
        }
    });
    return results;
}

class Tracker{
    constructor(){
        this.allocatedArray=[];
        this.reservedList={};   
    }

     allocate=(name)=>{
         if(this.allocatedArray.includes(name)){         
             if(this[name].reserve !== undefined){
                // console.log('yh',name)  
                 return this[name].reserve.shift()
             }else {
                 return `${name}${this[name].counter++}`
             }
         }
         else{
             this.allocatedArray.push(name);
              this[name]={};
              this[name].counter=1;
              this[name].reserve=[0];
              this[name].reservecount=0;
              this[name].counter++
             
              return  `${name}${this[name].counter++}`
         }
    }

    deallocate=(name)=>{
        let baseString=' ' ;
     Array.from(name).forEach(e=>{
        
          console.log(+e);
        })
    //    console.log(baseString,'y') 
    //    this[baseString].reserve.push(name)  
      
      }

}

console.log(hostAllocation(['A apibox','A apibox','D apibox1','A apibox', 'A sitebox']));