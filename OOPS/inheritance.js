class user{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`USERNAME IS ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username, email,password){
        // this.username=username;
        super(username);
        this.email=email;
        this.password=password
    }
    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1=new Teacher("sairam","sairam@gmail","ramsai");
user1.addCourses();
user1.logme();

const user2=new user("ramsai");
user2.logme();
// user2.addCourses();

console.log(user1 === user2);

