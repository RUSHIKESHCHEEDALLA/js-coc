//objects
const obj={
    name:"rushi",
    age:18,
    employed:false,
};
console.log(obj["name"]);
obj["name"]="rushikesh";
console.log(obj["name"]);

// Object.freeze(obj);

obj["name"]="rushikeshch";
console.log(obj);



obj.dob=function(){
    console.log("may 31")

}
obj.val=function(){
    console.log(`may 31 ${this.name}`)

}

// obj.dob();
// console.log(obj.dob)

obj.val();