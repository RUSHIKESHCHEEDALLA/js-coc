class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const rahul=new User("rahul")
rahul.logme();
// console.log(rahul.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone=new Teacher("iphone","i@gmail.com")
console.log(iphone.createId);


