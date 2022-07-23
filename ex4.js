//Create an empty object'user'
//Add the property 'name'=>'John'
//Add property 'surname'=>'Smith'
//Change 'name' =>'Pete'
//Delite property 'name' from object 'user'

let user = {
    name :'John',
    surname:'Smith',
}
user.name = 'Pete' 
delete user.name 
console.log(user)
    