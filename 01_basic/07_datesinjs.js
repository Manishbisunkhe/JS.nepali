// dates

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);*/

//let myCreatedDate = new Date(2023, 0, 23)

//console.log(myCreatedDate.toDateString());

 
//let myCreatedDate = new date("2023, 0, 23, 5, 3")
//console.log(myCreatedDate.toLoc);

let myCreatedDate =new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp =Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));    //console.log(Date.now()/1000);
let newDate = new Date()
/*console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
*/

newDate.toLocaleString('default',{
    weekday: "long",
    
})