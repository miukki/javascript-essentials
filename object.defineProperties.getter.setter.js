a.a = 1;

Object.prototype[''] = 2

Object.defineProperty(a, '', {
  // value: 0x9f91102, conflict with getter
   get: function () {
      return this.a+1;
   },
   set: function(newValue) {  },
   enumerable: true,
   configurable: true,
   //writable: false  //conflict
});

function fn(){
  for (var i in a) {
      console.log([i, a[i]].join('='), Object.prototype.toString.call(a))
  }
}

console.log(a())



//instance.show
function Constructor() { this.tets = function(){}}
o = new Constructor();
// is not equivalent to:
o = Object.create(Constructor.prototype);


//*property descriptors*
a = Object.create(Object.prototype, {
  a: { writable: true, configurable: true, value: 1 },
  //  getter-and-setter (accessor) property
  '': {
    configurable: false,
    get: function() { return a.a; },
    set: function(value) { console.log('value', value) }
  }
});

console.log(a[''],a['']=2)
