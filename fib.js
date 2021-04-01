/*
function fib(max){
	var arr = [0,1], i=0,j=1;
    for(var k=0; k<max-2;k++ ){
        var x=i+j;
        arr.push(x);
        i=j,j=x;
    }
    console.log(arr);
}
fib(10);


*/


// let result = (function fib(max,i,j) {
//   i = i||this[0];j=j||this[1];
//   if (max!==0) {
//     this.push(i+j);
//     return fib.bind(this, max-1, j, i+j)();
//   } else {
//     return this;
//   }
// }.bind([0,1], 10))();
// console.log(result);





//example vosborn interview
let pair = {}
function fibo(max, i=0, j=1, arr = []) {
  if (max === 0) {
    const res = [0, 1,...arr]
    pair[i] = res[res.length-1]
    return res[i-1]
  }
  console.log(`i`,i)
  arr.push(i+j);
  return fibo(max-1, j, i+j, arr);
}

const testing = (max) => pair[max] ||  fibo(max-2)
console.log(`result`,  testing(8));



