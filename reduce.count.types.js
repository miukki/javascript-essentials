const  cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
const carsObj = cars.reduce( (obj, name, index) => {    
  obj[name] = obj[name] > 1 ? ++obj[name] : 1;  
  return obj;}, 
  {} );
console.log('carsObj', carsObj)

// carsObj { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }