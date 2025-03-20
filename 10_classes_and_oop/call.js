function SetUsername(username){
    // complex calculation
    this.username =username
}
function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const tea = new createUser("tea", "tea@.com", "123")
console.log(tea);
