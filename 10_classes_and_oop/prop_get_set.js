function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        },
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.UpperCase
        },
        set: function(value){
            this._password = value
        },
    })
}

const tea = new User("tea.com", "abh")

console.log(tea.email);