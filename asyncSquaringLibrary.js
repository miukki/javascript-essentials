  
  const squareExponent = 2;
  const asyncSquaring = (number, callback) => {
    var result = Math.pow(number, squareExponent);
    setTimeout(()=>{
      callback(null, Math.pow(number, squareExponent));
    }, 2000);
  }

  
  async.map(arr, asyncSquaring, function(err, results){
      console.log(results);
  });