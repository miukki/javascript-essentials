//closure
var counter = (function() {
    var count= 0;
    return function () {
        return count++;
    }
})()


// function foo() {  // 'scope of foo' aka lexical scope for bar
//    var memory = 'hello closure';
//    return function bar() {
//       console.log(memory);
//    }
// }
 