let id=100
let sid=String(id)
// console.log(id);
// console.log(typeof id);

// console.log(sid);
// console.log(typeof sid);

let val=undefined;
let nullval=Boolean(val)

// console.log(nullval)

let num=true;
// console.log(num)
let nums=String(num)
// console.log(nums)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let a= 1 + 2 + 2
let b= 1+2 + 1 +"0"
let c= "1"+2 + 2
let d= "1"+"2" +"2"
// console.table([a,b,c,d])
// console.table([typeof a ,typeof b,typeof c, typeof d])

let x=3
let y=x++
// console.table([x,y])


// console.table(["2">"1","2"==="2","2"===2,"2"<"3"]);

// console.table([undefined>0,undefined==0,undefined>=0])
// console.table([null>0,null==0,null===0,null>=0])

let bn=123456789n
const names=["rishi","kesh","ch"]
let myObj={
    name:"rushi",
    age:22,
}
const myFunction=function(){
    console.log("hello world");
}
console.table([typeof bn,typeof names,typeof myObj,typeof myFunction]);
