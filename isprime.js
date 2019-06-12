const  isprime = (n) => {
    if(n==1 || n==0) return false;
    for(d=2; d*d<=n; d++){
      if(n%d==0)
        return false;
      }
    return true;
  }

const randomnumber= () => Math.ceil(Math.random()*10)
//new Array(10).map(i=>randomnumber())
const array  = [1,2,3,4,5,6,7].reduce((output, i) => {
    if (isprime(i) ) {
      output.push(i)
    }  
    return output
}, [])

console.log('array', array)

