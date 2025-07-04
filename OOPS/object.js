// function mult(num){
//     this.num=num
//     return num*5
// }
// console.log(mult(5))

// mult.power=2;

// console.log(mult(5))
// console.log(mult.power)
// console.log(mult.prototype);


function createUser(un,s){
    this.un=un
    this.s=s
}
createUser.prototype.increment=function(){
    this.s++
}
createUser.prototype.print=function(){
    console.log(this.un);
    console.log(this.s);   
}


const chai=new createUser("chai",20);
const tea=new createUser("tea",25);

console.log(chai)
tea.increment();
console.log(tea)
// console.log(chai.prototype)//undefined
console.log(createUser.prototype)//increment
chai.print()
tea.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/





