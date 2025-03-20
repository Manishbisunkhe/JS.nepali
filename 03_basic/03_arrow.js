// this keyword explain about current context
const user = {
    username: "manish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username= "shekhar"
// user.welcomeMessage()
// console.log(this);     //{}

// function chai(){
//     let username = "manish"
//        console.log(this.username);       //{}   undefined
//     //    console.log(this);         
// }

// chai()


const chai = ()=> {
    let username ="manish"
    console.log(this.username);
}

// chai()


// holding arrow function in variable
// it is basic arrow function

// const addTwo =(num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3, 4));


// the another way of using arrow function called implecet return
// in this ipmlecet method we donot have to use parantheses{}


//const addTwo =(num1, num2) => num1 + num2
// const addTwo =(num1, num2) => (num1 + num2) 
// if  {} this used in function must involve  return keyword otherwise not needed

// to return object

const addTwo =(num1, num2) => ({username:"manish"})

    console.log(addTwo(3, 4));



    // eg of arrow function in loop
    const myArray =[2, 5, 3, 7, 8]
    myArray.forEach()




