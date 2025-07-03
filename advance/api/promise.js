const PromiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("new promise one");
        resolve();

    },1000);
});
PromiseOne.then(function(){
    console.log("promise one is resolved");
});


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 resolved");
})

const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ruhsikesh",age:21});
    },1000);
});
PromiseThree.then(function(user){
    console.log(user);
});


const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"ruhsikesh",age:21});
        }
        else{
            reject("ERROR");
        };
    },1000);
});
PromiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})


const p5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"ruhsikesh",age:21});
        }
        else{
            reject("JS ERROR");
        };
    },1000);
})

async function cp5(){
    try {
        const res=await p5;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
cp5();




fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    // console.log(res);
    return res.json();
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})











