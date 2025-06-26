const arr=[5,4,3,2,1]
for (const i of arr) {
    // console.log(i);  
}

let name="rushikesh"
for (const l of name) {
    // console.log(l);
}

//maps
const map=new Map()
map.set(1,"rushi")
map.set(2,"kesh")
map.set(1,"rushich")


// console.log(map);
// console.log(map.size);

for (const [k,v] of map) {
    // console.log(`${k} => ${v}`);
}

const obj1 = {
  n1: "rushikesh",
  n2: "cheedalla"
};

for (const key in obj1) {
//   console.log(key, obj1[key]);
}


const val=["hey","hai"]
for (const key in val) {
    // console.log(key);
    // console.log(val[key]);
    
}


const coding=["cpp","python","java","ruby"]
coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach((item)=>{
    // console.log(item);
    
})

function print(params) {
    // console.log(params);
}

coding.forEach((item,index,array)=>{
    // console.log(item,index,array);
    
})


const l=[
    {
        ln:"java",
        lfn:"java"
    },
    {
        ln:"python",
        lfn:"py"
    }
]

l.forEach((item)=>{
    console.log(item.ln);
    console.log(item.lfn);
})