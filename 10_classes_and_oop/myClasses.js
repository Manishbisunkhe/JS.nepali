//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const tea = new User("aman", "aman@.com", "123")
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());


//behind the scene
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return(`${this.password}abc`)
}
User.prototype.changeUsername = function(){
    return(`${this.password}abc`)
}

const chai =new User("chi", 'chi@User.com', "123" )
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

