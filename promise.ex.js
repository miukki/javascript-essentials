const promiseFunction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;
  
  resolve(add(2, 2));
});

promiseFunction.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});


// Async/Await
const asyncGreeting = async () => 'Greetings1';

// Promises
const promiseGreeting = () => new Promise(((resolve) => {
  resolve('Greetings2');
}));

asyncGreeting().then(result => console.log(result));
promiseGreeting().then(result => console.log(result));
