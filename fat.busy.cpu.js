

const fn = () => (n) => setTimeout(d => {
  console.log(`init! ${d}*1000 mills `)
  fn()(d)
}, n * 1000, 2*n+1);
console.log(fn()(1))

//   //10 Billion ticks loop
// for (let i = 0; i < 1e10; i++) {
//   // Block Things Synchronously
//   // the blocking loop to finish first.
// }