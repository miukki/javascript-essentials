//closure
var counter = (function () {
  var count = 0
  return function () {
    return count++
  }
})()

//In other words, a closure gives you access to an outer function's scope from an inner function.

// function foo() {  // 'scope of foo' aka lexical scope for bar
//    var memory = 'hello closure';
//    return function bar() {
//       console.log(memory);
//    }
// }
