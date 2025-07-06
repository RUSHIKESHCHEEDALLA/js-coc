const desc=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(desc);

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

const myData={
    name:"rushikesh",
    age:"21",
    gender:"male"
}
// console.log(Object.getOwnPropertyDescriptor(myData,"name"));

Object.defineProperty(myData,'name',{
    writable:false,
    enumerable:true,
    configurable:true
})
// console.log(Object.getOwnPropertyDescriptor(myData,"name"));

