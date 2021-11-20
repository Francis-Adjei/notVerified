function addBorder(picture) {
    let size=[picture.length, picture[0].length];
    let topNBottom=[];
    for(let i=0; i<size[1]+2; i++){
        topNBottom.push('*');
    }
      let ready = topNBottom.join('');
  
    for(let i=0; i<size[0];i++){
        newPix = Array.from(picture[i]);
        newPix.push('*');
        newPix.unshift('*');
        let final = newPix.join('');
        picture[i]=final;
    }
    picture.unshift(ready);
    picture.push(ready)
    
    
    return picture;
  }
  console.log(addBorder(8))
  