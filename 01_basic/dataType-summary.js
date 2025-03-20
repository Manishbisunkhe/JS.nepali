// // primitive.     it means call by value

// // 7 type :string, number,boolen,null, undifined,symbol,BigInt
// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail = undifined
// // let userEmail;  8 and 9 both are same
// const id = symbol('123')
// const anotherId= symbol('123')
// console.log(id=== anotherId);

const bigNumber = 324242424244n

//To be a master in js . Master object and web event of JS.

// // Refrence (Non primitive)   it means call by refrence

// //Array, objects,Functions

// const friend =["karan", "Neyma","Hira"]
//  let myObj= {
//     name: "Manish"         inside of {} all are object and data type can be any.
//     // age:22,
//  }
//  const myFunction = function(){
//     console.log("hello world");`
//  } 
console.log(typeof bigNumber ); 


// ********************************************************************

// Memory type
// Stack (primitive), heap(non primitive)


let myYTname = "manish"
let anotherName = myYTname 
anotherName = "code"


console.log(myYTname);             //answer manish
console.log(anotherName);            //answer code

let userone ={
    email: "user@google.com",
    citz: "12345"
}
let userTwo =userone
userTwo.email = "manish@google.com"
console.log(userone.email);       //answer manish@google.com
console.log(userTwo.email);       //answer manish@google.com
