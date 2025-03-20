// to decleare object there is two ways leateral and constructor

//singleton----it means  if by using  any constructor it will made one singleton object
//Object.create


//object literals
// in object we can define both key and value

const mySym =Symbol("key1")

const JsUser = {
    name: "Manish",
    "full_name":"Manish Bisunkhe",
    [mySym]: "key1",
    age: 22,
    location:"Mulpani",
    email:"manish@gmail.com",
    isLoggedIn: false,
    lastLoggrdinDays: ["monday","saturday"]
}
//accessing Object

//console.log(JsUser.age,);
//console.log(JsUser["age"]);
//console.log(JsUser["full_name"]);
//console.log(JsUser[mySym]);

//to chanage the value 
JsUser.email ="manish2@gmail.com"

//console.log(JsUser.email);

//Object.freeze(JsUser)           it freeze the object
JsUser.email ="manish100@gmail.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


