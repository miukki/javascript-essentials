String.prototype.repeat = function(times) {
  console.log('this', this)
  return new Array(times+1).join(this);
};

console.log( "yes ".repeat(3) ); // repeat three times

