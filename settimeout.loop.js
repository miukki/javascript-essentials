const tick = (n) => {
    console.log(`init every ${n}*1000 mills `)
    setTimeout(d => tick(d), n * 1000, n*20);
      //setTimeout delay is not a guaranteed thing, but rather a minimum thing. 
    //The n*1000 ms means a minimum delay of n*1000 ms
  
  }
  
  tick(5)//h/min/sec

  

const fn = () => (n) => setTimeout(d => {
  console.log(`init! ${d}*1000 mills `)
  fn()(d)
}, n * 1000, 2*n+1);
console.log(fn()(1))

  