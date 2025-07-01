//filter
// const nums=[1,2,3,4,5,6,7,8,9,10]
// const myNums=nums.filter((num)=>num>4)
// console.log(myNums);

// const myNums1=nums.filter((num)=>{
//     num>4
// })
// console.log(myNums1);


// const myNums2=nums.filter((num)=>{
//     return num>4
// })
// console.log(myNums2);


// const ans=[]
// nums.forEach((item)=>{
//     if (item>3){
//         ans.push(item);
//     }
// })
// console.log(ans);


//map

// const nums=[1,2,3,4,5,6,7,8,9,10]

// const newNums= nums.map((i)=>i+10)
                

// console.log(newNums);

// const newNums2= nums
//                 .filter((i)=> i%2==0)
//                 .map((i)=>i+10)
                

// console.log(newNums2);


//reduce

// const a=[1,2,3,4,5]

// const b=a.reduce((a,c)=> a+c ,0)

// console.log(b);

const sc=[
    {
        pn:"brush1",
        p:99
    },
    {
        pn:"brush2",
        p:9
    },
    {
        pn:"brush3",
        p:999
    }
]

const ans=sc.reduce((a,item)=>a+item.p,0)
console.log(ans);




 