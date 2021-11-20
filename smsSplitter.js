function smsSplitter(text,limit){
    var chunks = [];
    var split = text.split(' ');
  
    var thisChunk = split[0];
    for (var i=1; i < split.length; i++) {
      var nextLength = thisChunk.length + split[i].length + 1;
  
      if (nextLength > (limit-5)) {
        chunks.push(thisChunk);
        thisChunk = split[i];
      } else {
        thisChunk += " " + split[i];
      }
  
      if (i == split.length-1) chunks.push(thisChunk);
    }
  
    return chunks.map(function(chunk, i) {
      return chunk + "("+(i+1)+"/"+chunks.length+")";
    });
     
}