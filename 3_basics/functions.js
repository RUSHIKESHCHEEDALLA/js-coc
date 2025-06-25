//functions

function add(a,b){
    let ans=a+b
    return ans
}
add(5,6)
// console.log("result " , add(5,6))

function present(un){
    if (!un){
        //console.log("please enter the user name")
        return 
    }
    return `${un} is present to the class`
}
//present()
//console.log(present("ruhsi"));


function print(num){
    return num
}

function  printall(...num){
    return num
}

// console.log(print(100,200,300))
// console.log(printall(100,200,300))

const username={
    un:"rushikesh",
    age:21
}

function user(val){
    return `name ${val.un} age is ${val.age}`
}

// console.log(user(username))
addone(5)
console.log(addone(5))
function addone(num){
    return num+1
}
// addtwo(5)
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))



