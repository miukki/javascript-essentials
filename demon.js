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


//final sample from class
// async demon(n, isNoError = true) {
//   while (isNoError) {
//     console.log(`Start proccess`);
//     try {
//       const result = await this.bodyAsyncForDemon();
//       this.logger.info(`Success, next recalculation in ${n} mills`, { result: JSON.stringify(result) });
//       await this.delay(n);
//     } catch (error) {
//       isNoError = false;
//       this.logger.error(`error`, { error });
//     }
//   }
// }