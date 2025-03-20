// if

// if true then execute code if false donot execute
// const isUserLogggedIn = true
// const temperature = 42

// if (temperature<50) {
//     console.log("yes");
    
// } else{
//     console.log("no");
// }




// if ( 2 === "2"){
//    console.log("executed");    //executed
// }else{
//     console.log("not executed");
// }
    


// const score = 200
// if (score >100){
//     const power = "fly"
//     console.log(`user power: ${power}`);  //user power: fly
// }
// console.log(`user power: ${power}`);//power is not defined. it we have used var then the 
//    result is user power: fly which is not good at all

const balance = 1000

// if (balance >500) console.log("test"),console.log("test"); do not use this writing style
 
// if (balance< 500) {
//     console.log("less then 500");
// } else if (balance <750) {
    
// } else if (balance< 900){
//     console.log("less then 750");
// } else {
//     console.log("less then 1200");
// }

const userLoggedIn =true
const debitCard =true
const LogggedInFromGoogle =false
const LogggedInFromEmail=true
if (userLoggedIn && debitCard) {
    console.log("allow to buy cource")
}
if (LogggedInFromGoogle || LogggedInFromEmail) {
    console.log("user logged in");
}

