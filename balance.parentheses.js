//Returns 0 if balanced.const 

const isParentsBalanced  = (str) => {  
  return str.split('').reduce((counter, char) => {    
    if(counter < 0) { 
        //matched ")" before "("      
      return counter; } 
    else if(char === '(') {      
      return ++counter;    
    } else if(char === ')') {      
      return --counter;    
    }  else { //matched some other char      
      return counter;    }      
    }, 0); //<-- starting value of the counter
  }

console.log(isParentsBalanced('(())'), isParentsBalanced('(()'))

