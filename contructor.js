
//instance.show
function Constructor() { this.tets = function(){}}
o = new Constructor();
// is not equivalent to:
o = Object.create(Constructor.prototype);
