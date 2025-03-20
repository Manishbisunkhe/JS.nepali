const User = {
    _email: 'hffgm.com',
    _password: 'gih',

    get email(){
        return this._email.toUpperCase()

    },

    set email(value){
        this._email = value

    }
}
// using factory function
const cat = Object.create(User)
console.log(cat.email);

