//gettera and setter
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return this._password
    }
    set password(val){
        this._password=val
    }
}
const hitesh=new User("hitesh@ai","123abc")
// console.log(hitesh.password);

//function getter and setter
function User1(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this, "email" , {
        get:function(){
            return this._email
        },
        set: function(val){
            this._email=val
        }
    })
    Object.defineProperty(this, "password" , {
        get:function(){
            return this._password
        },
        set: function(val){
            this._password=val
        }
    })

}

const U1=new User1("u1@gmail.com","new1");
// console.log(U1.email);
// console.log(U1.password);

//Object getter and setter
const User2={
    _email:'u2@g.com',
    _password:"abcd",

    get email(){
        return this._email
    },
    set email(val){
        this._email=val
    },
    get password(){
        return this._password;
    },
    set password(value){
        this._password=value
    }
}

const u2=Object.create(User2)
console.log(u2.email);
console.log(u2.password);


