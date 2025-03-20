const score =400
// console.log(score);          // 400


const balance =new Number(100)      
console.log(balance);         //[Number: 100]

console.log(balance.toString().length);       //3
console.log(balance.toFixed(5));    //100.00000
  
const otherNumber =23.8966
console.log(otherNumber.toPrecision(3));     //23.9

const otherNumbers =123.8966
console.log(otherNumbers.toPrecision(3));     //124


const hundred =1000000
console.log(hundred.toLocaleString());    //us     1,000,000

console.log(hundred.toLocaleString(`en-In`));     //india       10,00,000    */


//*************************************************math *******************************

console.log(Math);   //Object [Math] {}
console.log(Math.abs(-4));   //ans=4    only turn negative value in positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3, 4, 5, 6));
console.log(Math.max(3, 4, 5, 6));
console.log(Math.random());          //it gives value between only 0 to 1 it can be any
console.log(Math.random()*10);       
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20
// console.log(Math.floor(Math.random() *(max - min +1))+min)




/*math.random gives value between only 0 to 1 it can be any for example 0.1, 0.2, 0.5
there is problem when you multiply *10 we shift the value to left side then the value comes 0.1
 then the math.floor then it gives value 0 to avoide that case we add 1 because we need 
 min greater then 1 or ongoing any number in that case we added 1 than it gives the from 1 to 9
 but sometimes come case like you need to define min and max both in that case we use math.random
 plue we  did not multiply with 10 we did max - min to find the range and + 1to avoide 0 case
 after doing that the value is still same from start . to avoide that case we added min value 
 inside it.*/ 
