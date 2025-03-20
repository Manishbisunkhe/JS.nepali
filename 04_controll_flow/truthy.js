// video 26 time 31 min


const userEmail = "manish.ai"

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}
//Got user email because there is string in variable (manish.ai)
// if the variable is empty then we get ("Don't have user email")


/*falsy values
false, 0, -0, BigInt 0n,  "", null, undifined, NAN


Truthy values
"0", `false` "  ", [], {},  function(){}
*/


// way of checking array
// const UserEmail = []

// if (UserEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyObj ={}
if (Object.keys(emptyObj).length ===0) {
    console.log("object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 5?? 10
// val1 = null?? 10
// val1 = undefined ?? 15
// val1 = null ? 10 ?? 20


// console.log(val1);



// Terniary operator

// condition ? true : false 

const iceTeaPrice =100
iceTeaPrice<=80 ? console.log("less then 80"):console.log("more then 80");