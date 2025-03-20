const myNumber =[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumber.map((num) =>num+10)
// using scope
// const newNums=myNumber.map((num) =>{
//     return num+10})




// chaining

const newNums = myNumber
.map((num)=> num*10)
.map((num)=>num +1)
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]
  .filter((num)=> num>=41)
//   [
//     41, 51,  61, 71, 
//     81, 91, 101
//   ]

console.log(newNums)
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]