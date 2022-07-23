//In this task, we can change the value of the object, but not the object itself.
//becouse const=>user(cant be change) but value (name:'john') we can change! 
//we take the object 'user'
//object has properties: key - value;
//we take object 'user'calling through a '.' key and change value =>'Pete'
// like this (user.name = "Pete")=>when we call console.log(user) we have 'Pete'

const user = {
    name: "John"
  }
  
  // does it work?
 user.name = "Pete"
 console.log(user)