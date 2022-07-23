// Add sum of numbers
// create the result sum variable with the value 0;
// create a forloop 
// variable sum of the result is equal to the value of the list
// console.log(sumResult)=> 0 + 100,+160,+130,+250,+5000=>5640!
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghait: 130,
    Matt: 250,
    Lasha:5000
  };
  
  let sumResult = 0;
  for (let value in salaries) {
    sumResult = sumResult + salaries[value];
  }
  
console.log(sumResult)
 
