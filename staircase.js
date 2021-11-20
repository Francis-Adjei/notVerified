let s=' ';
let c='#';

function staircase(n) {
    // Write your code here
   for(let i=n; i>0; i--){
      s=s.repeat(i);
      c=c.repeat(n-i+1);
      console.log(s+c);
      s=' ';
      c='#';
   }
  

}
staircase(10);
