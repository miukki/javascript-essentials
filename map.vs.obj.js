    // object vs map
// have very similar use-cases


// Map abstract data structure type, data is stored in a form of pairs,
// uniqueness of each stored key
// used for fast searching and looking up data

// const map =  {(1, "small"), (2, "cry"), (42, "happy")};
//key and value in Map can be in any data type
// not limited to only string or integer for key

//Inheritance: Map is an instance of Object (surprise surprise!),


// const map = new Map([[1,2],[3,4]]);
// console.log(map instanceof Object); //true
// var obj = new Object();
// console.log(obj instanceof Map); //false


//only by using built-in constructor
// var map = new Map(); //Empty Map
// var map = new Map([[1,2],[2,3]]); // map = {1=>2, 2=>3}
var map = new Map([[{foo: 'bar'},2], [3,4]])


map.set(4,5); 
map.get(3); 
map.clear(); //{}

var isDeleteSucceeded = map.delete(1); //{ 2=>3, 4=>5}
console.log(isDeleteSucceeded); //true


//For map: { 2=>3, 4=>5}
for (const item of map){
    console.log(item); 
    //Array[2,3]
    //Array[4,5]
}

//Or
for (const [key,value] of map){
    console.log(`key: ${key}, value: ${value}`);
    //key: 2, value: 3
    //key: 4, value: 5
}

// oR forEach
map.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));
//key: 2, value: 3
//key: 4, value: 5

//source
https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373

