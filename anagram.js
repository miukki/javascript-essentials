
  const getMinimumDifference = (a, b) => {
    let count = 0
    // if length not the same 
    if (a.length !== b.length) {
        count = -1
        return count;
    }
    
    
    const newCount = a.split('').reduce((acc, letter, index)=> {
        if (b.includes(letter)) {
            return ++acc['count'];
        } else {
            return ++acc['letterCount'];
        }   
    
    }, {count: 0, letterCount: 0}); //=== b.length ? 0 : count

    return newCount;

}

console.log(getMinimumDifference('kj', 'k0'))