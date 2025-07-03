// const user = {
//     username:"rushikesh",
//     logintime:8,
//     si:true,
//     getUserDetails:function(){
//         console.log(this);
//         console.log(`username : ${this.username} , loginTime: ${this.logintime} , SignedIn: ${this.si} `);
//     }
// }
// user.getUserDetails();
// function Data(name,age){
//     this.name=name;
//     this.age=age;
//     this.myData=function(){
//         console.log(`Name : ${this.name} , age: ${this.age}`);
//     }
//     return this
// }
// const data1=new Data("rushikesh",21);
// const data2=new Data("jyothi",41);
// console.log(data1.constructor);
// console.log(data2);
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);

console.log(auto instanceof Object);
















