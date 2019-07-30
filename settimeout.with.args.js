const arg = `Node.js`;
// setTimeout((arg)=>console.log(arg), 2 * 1000, `${arg}`);


const bodyAsync = async () => setTimeout(()=>(2*1000), 5*1000); 
const tick = (n, t) => {
  const t = await bodyAsync()
  console.log('t', t)
  // setTimeout(d => tick(d), n * 1000, 24 - t > 0 ? 24 - t : 24 );

}

tick(5)//h/min/sec


//In the previous example, did you notice how executing something with setTimeout after 0 ms did not mean execute it right away
const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);
clearTimeout(timerId);

