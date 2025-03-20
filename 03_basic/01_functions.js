
// function sayMyName(){
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("I");
//     console.log("S");
//     console.log("H");
    
// }

// sayMyName()
// OUTPUT
// M
// A 
// N 
// I 
// S 
// H 
// sayMyName is only refrence but () is execution


// function addTwoNumber (number1, number2){    //number1 and number2 called parameter
//     console.log(number1+ number2);
// }
// addTwoNumber()// not a number
addTwoNumber(4, 6)      //(4 ,6)  called argument
//10
function addTwoNumber (number1, number2){   
    // let result = number1+ number2
    // return result
    // console.log("Manish");  it will never execute because function have their rule of return

    //or another way of doing
     return number1+ number2
}// we can also store in return value in variable
const result = addTwoNumber(4, 6)
// console.log("result:", result);
function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("manish"))    //the answer is manish just logged in
//console.log(loginUserMessage())   // if empty the answer is undefined




// function loginUserMessage(username){
//     if(username ===undefined){
//         console.log("please enter a username");    }
//     return `${username} just logged in`
//}
// ! it convert true to false and false to true



function calculateCartPrice(...num1){      //... rest operator to enter multiple value
return num1
}
// console.log(calculateCartPrice(2));        // ans 2

console.log(calculateCartPrice(200, 400, 500)); 



// how to pass object to function and used it properly
const user={
    username:"manish",
    price: 200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleobject(user)     //username is manish and price is 200
// the other way to pass object 
handleobject({
    username:"SAN",
    price:400
})

// passing array datatype
const myNewArray =[200, 300, 400, 800]
function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
// or another way 
console.log(returnSecondValue([2000, 456, 656, 43546, 556, 35446, 554]));