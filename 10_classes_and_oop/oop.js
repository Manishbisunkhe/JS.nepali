// const user = {
//     username: 'manish',
//     loginCount: '8',
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("got user details from db");
//         // console.log(`${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, loginCount, isLloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLloggedI= isLloggedIn;

    this.greeting =function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}


const userOne = new User("manish",23,true)
const userTwo = new User("shekhar",20,false)
console.log(userOne.constructor
);
// console.log(userTwo);
