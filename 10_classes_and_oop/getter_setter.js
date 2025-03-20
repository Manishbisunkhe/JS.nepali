class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    

    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    

    }
}

const manish = new User('manish.ai', "abc")
console.log(manish.password);
console.log(manish.email);
