Symbol() === Symbol() //false

// > typeof Symbol('dsds')
// 'symbol'

new Symbol() // TypeError: Symbol is not a constructor

//Symbols can be used as Object keys
var myObj = {}
var fooSym = Symbol('foo')
var otherSym = Symbol('bar')
myObj['foo'] = 'bar'
myObj[fooSym] = 'baz'
myObj[otherSym] = 'bing'
assert(myObj.foo === 'bar')
assert(myObj[fooSym] === 'baz')
assert(myObj[otherSym] === 'bing')

//Symbols are completely unique…
assert.notEqual(Symbol('foo'), Symbol('foo'))

var localFooSymbol = Symbol('foo')
var globalFooSymbol = Symbol.for('foo')

assert(Symbol.keyFor(localFooSymbol) === undefined)
assert(Symbol.keyFor(globalFooSymbol) === 'foo')
assert(Symbol.for(Symbol.keyFor(globalFooSymbol)) === Symbol.for('foo'))

source
// https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

new Symbol() // TypeError: Symbol is not a constructor
