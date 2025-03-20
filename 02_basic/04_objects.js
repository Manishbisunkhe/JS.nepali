//const tinderUser= new Object()     //singleton object
const tinderUser = {}              //non singleton object

tinderUser.id="123abc"
tinderUser.name = "manoj"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// accessing the object value which is inside the object
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullName: {
            firstname:"manish",
            lastname:"bisunkhe"
        }
        
    }
}
// console.log(regularUser.fullname.userfullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign(obj1, obj2)        //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({}, obj1, obj2, obj4)      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj2,...obj2,...obj4}   //{ '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj3);        


const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// { id: '123abc', name: 'manoj', isLoggedIn: false }
// [ 'id', 'name', 'isLoggedIn' ]


// console.log(Object.values(tinderUser));

// [ '123abc', 'manoj', false ]

// console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'manoj' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));  // asking the questions

//true

// this is important while doing job in database


const course = {
    coursename: "js in nepali",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor

// to write clean code
const {courseInstructor: instructor} = course
// console.log(courseInstructor);  //hitesh
console.log(instructor);  // object destructure or changing object name



// {
//     "name": "manish",
//     "coursename": "js in nepali",
//     "price": "free", 
// }
