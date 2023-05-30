function fizz_buzz(N) {
    
    let array = [];
    
    for (let i = 1; i <= N; i++) {
      
      if (i % 3 === 0 && i % 5 === 0) {
        array.push("FizzBuzz");
      }
      
      else if (i % 3 === 0) {
        array.push("Fizz");
      }
      
      else if (i % 5 === 0) {
        array.push("Buzz");
      }
      
      else {
        array.push(i);
      }
    }
    
    return array;
  }
  module.exports = fizz_buzz()
  
 //console.log(fizz_buzz(30))

