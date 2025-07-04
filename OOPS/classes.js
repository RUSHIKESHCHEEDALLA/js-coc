//ES-6
// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     } 
//     encryptPassword(){
//         return `${this.password}abc `
//     }
//     usernameToCapital(){
//         this.username=this.username.toUpperCase();
//         return this.username
//     }
// }
// const chai=new User("rushikesh","rushi@gmail,com","rushi123")
// console.log(chai.encryptPassword());
// console.log(chai.usernameToCapital());

//behind the scene
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.CaptilizeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const user1=new user("nikhil","dni@yahoo.com","3113")

console.log(user1.encryptPassword());
console.log(user1.CaptilizeUsername());






