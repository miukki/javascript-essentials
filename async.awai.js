//promise example
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

doubleAfter2Seconds(10).then((r) => {
  console.log(r);
});

let sum = doubleAfter2Seconds(10)
          + doubleAfter2Seconds(20)
          + doubleAfter2Seconds(30);
function addPromise(x){
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        })
      })
    })
  });
}

console.log(sum);


//Async way is more easy
async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}

//Async return promise
addAsync(10).then((sum) => {
  console.log(sum);
});

//Async/Await error handling example
//with error example 