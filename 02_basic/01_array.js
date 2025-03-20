//array

/*[]---brackets       it is used for array
()---parantheses
{}---bracess or carly bracess
*/
const myArr = [1, 2, 3, 4, 5,]
const myHeros= ["saja","norlam"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[2]);

// Array Methods

/*yArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.push(10)  // to add value
myArr.pop()    // to remove last value*/

//myArr.unshift(0)
//myArr.unshift(10)    //unshift add value in front and shift all the value
//myArr.shift()       //shift remove the front value and shift all the value

/*console.log(myArr.includes(9));
console.log(myArr.includes(5));   // its gives answer in bollean i.e true or false
console.log(myArr.indexOf(15));      //answer -1   it means it did not know or the value is not exist
console.log(myArr.indexOf(5));         //answer 5*/


/*const newArr =myArr.join()
console.log(myArr);     //[ 1, 'F', 3, 4, 5 ]
console.log(newArr);        //1,F,3,4,5
console.log(typeof newArr);      //String     
//joint bind our array and also converted to string.*/



// slice ,splice

/*console.log("A ", myArr);           // A  [ 1, 2, 3, 4, 5 ]
const myn1 =myArr.slice(1,3)   
console.log(myn1);               //[ 2, 3 ]


console.log("B ",myArr);
const myn2 =myArr.splice(1,3)

console.log("c",myArr);
console.log(myn2);         //  [ 2, 3, 4 ]

*/


let users = ["manish ","karan ","hira ","neyma","shekhar","sanjay"]
users.splice(1,3);
console.log(users);


 










