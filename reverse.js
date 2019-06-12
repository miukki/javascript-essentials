function reverse(num) {
    var str = num+'';
    console.log('str', str)
    return (str === '') ? '' : Number(reverse(str.substr(1)) + str.charAt(0));
  }
  
console.log('reverse(12345)', reverse(12345));


function reverseSecond(num) {
  var str = num+'';
  return str.split('').reduce((a,b)=>b+a,'')
}

console.log('reverseSecond(12345)', reverseSecond(12345));