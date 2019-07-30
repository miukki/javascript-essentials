//promise example
const delay = (t) => new Promise(resolver => setTimeout(resolver, t)) 

async function bodyAsync () {
  await delay(2000)
  // uncomment if need throw error
  // .then(res=>{
  //   console.log(`error`)
  //   throw Error(`error`)
  // })
}

//Async way is more easy
async function demon(n, isNoError=true) {
  while(isNoError) {
    console.log(`start`)
    try {
      await bodyAsync()
      console.log(`success, next delay  ` +  n)
      await delay(n * 1000) 
    }
    catch (error) {
      isNoError = false;
    }
  }
}

//Async return promise
demon(5)

