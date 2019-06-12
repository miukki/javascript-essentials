function * generatorFunction() { 
    console.log('This will be executed first.');
    yield 'Hello, ';  
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
  const generatorObject = generatorFunction(); 
  console.log(generatorObject.next().value); 
  console.log(generatorObject.next().value); 
  console.log(generatorObject.next().value); 
  
  
  function *  generatorFunc() {
    yield 'a';
    return 'b'; 
    yield 'a';  
  }
  
  const gObject = generatorFunction(); 
  
  console.log('!',gObject.next().value, gObject.next().value)
  
  
  function * iterableObj() {
    yield 'This';
    yield 'is';
    yield 'iterable.'
  }
  for (const val of iterableObj()) {
    console.log(val);
  }
  // This
  // is 
  // iterable.
  
  //fetch basedon generator
  function fetchJson(url) {
    return fetch(url)
    .then(request => request.text())
    .then(text => {
        return JSON.parse(text);
    })
    .catch(error => {
        console.log(`ERROR: ${error.stack}`);
    });
  }
  
  fetchJson()