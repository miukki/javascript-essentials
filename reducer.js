const reducer  =  [1,4,6,7,8].reduce((finallist=[], i) => {
  if (i > 5 ) {
    finallist.push(i)
  }  
  return finallist
  }, [])



  // if (n % 3 == 0) {
  //   text  += 'on3';
  // }
  // if (n % 5 == 0) {
  //   text += 'on5';
  // }


console.log(reducer);
