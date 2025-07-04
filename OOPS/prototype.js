// let name="rushieksh  ";
// console.log(name.length);
// console.log(name.trueLength);
// console.log(name.trim().length);

let names=["rushikesh","jyothi"];
let gender={
    rushikesh: "male",
    jyothi:"female",
    getGender: function(){
        console.log(`rushikesh is a ${this.rushikesh}`);
        console.log(`jyothi is a ${this.jyothi}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.heyHitesh=function(){
    console.log(`hitesh is present in all arrays`);
}

// gender.getGender();
// names.hitesh();
// names.heyHitesh();
// gender.hitesh();
// gender.heyHitesh();

//inheritance

const user={
    name:"chai",
    email:"chai@gmail.com"
}
const teahcer={
    makeVideo:true
}
const teahcersupport={
    isAvailable:false
}
const tasupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__: teahcersupport
}
teahcer.__proto__ = user

//modern syntax
Object.setPrototypeOf(teahcersupport,teahcer)
console.log(teahcer.__proto__);
console.log(teahcersupport.__proto__);
console.log(tasupport.__proto__);

let name="rushikesh   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(${this.name});
    console.log(`True Length is : ${this.trim().length}`);
}
console.log(name);
console.log(name.length);
name.trueLength();
"jyothi".trueLength();
"rangaiah".trueLength();










