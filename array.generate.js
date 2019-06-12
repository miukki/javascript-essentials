//generate.array

Array.from({length: 5}, (v, i) => i)
Array.apply(null, Array(5)).reduce((a,b)=>a+"*"+(b===undefined?a:b),'!')