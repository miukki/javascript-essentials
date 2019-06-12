//Object
//  limited to only string or integer or symbol for key

// Regular Object is dictionary type of data collection 
// key-value stored concept like Map. 
// Each key in Object — or we normally call it “property” — 
// is also unique and associated with a single value.

// Object in Javascript has built-in prototype.
// all objects in Javascript are instances of Object, including Map . 


var obj = {}; //Empty object
var obj = {id: 1, name: "Test object"}; 

var obj = new Object(); //Empty Object . by constructor
var obj = new Object; //same result

//Or by using Object.prototype.create
var obj = Object.create(null); //Empty Object

//Object.prototype.create
var Vehicle = {
    type: "General",
    display: function(){console.log(this.type);}
}
var Car = Object.create(Vehicle); //create a new Car inherits from Vehicle
Car.type = "Car"; //overwrite the property
Car.display();//"Car"
Vehicle.display();//still "General"


var isExist = obj.id === undefined; //check if obj has that property defined before.


//iterables
const obj = {id: 1, name: "test"}
for (var key in obj){
   console.log(`key: ${key}, value: ${obj[key]}`);
   //key: id, value: 1
   //key: name, value: test
}

//keys
Object.keys(obj).forEach((key)=> console.log(`key: ${key}, value: ${obj[key]}`));

//size
Object.keys(obj).length
 
