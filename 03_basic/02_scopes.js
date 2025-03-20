//var c =300
let a =300
if(true){
    let a = 10
    const b = 20
    //var c =30
   // console.log("Inner:", a);

}




//console.log(a)  //not defined  Inner: 10
//300
// console.log(b);  //not defined
//console.log(c);  //ans 30




function one(){
    const username ="manish"

    function two(){
        const website= "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()


if (true) {
    const username ="manish"
    if (username === "manish") {
        const website = "youtube"
        //console.log(username+website);
        
    } 
    //console.log(website);       error
        
    }
   // console.log(username);     error

    
//+++++++++++++++++++++interesting++++++++++++++++++the two way of making function
//console.log(addone(5))     // work on this suitation only not in next one
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num +2
}
addTwo(5)

