const myNums =[1,2,3]

// const newNum=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and carval: ${currval}`);
    // acc: 0 and carval: 1
    // acc: 1 and carval: 2
    // acc: 3 and carval: 3
//     return acc+ currval
// },0 )

// in arrow function
const newNum = myNums.reduce((acc, currval)=>acc+currval,0)//6
// console.log(newNum);

const shoppingCart =[
    {
        itemName: "js cource",
        price:2999
    },
    {
        itemName: "py cource",
        price:1999
    },
    {
        itemName: "java cource",
        price:2000
    },
    {
        itemName: "data science cource",
        price:5000
    },
]
const newshoppingCart=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(newshoppingCart);