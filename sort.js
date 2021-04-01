const find = (arr, val) => arr.sort((a, b) => b - a).indexOf(val)

console.log(find([3, 2, 3, 4, 5, 6, 7, 3], 3))
