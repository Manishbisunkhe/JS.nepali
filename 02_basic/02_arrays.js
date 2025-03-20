const marvelHeros = ["thor ","ironMan ","spiderMan"]
const dc_heros = ["superman ","Batman","flash"]


//marvelHeros.push(dc_heros)

//console.log(marvelHeros); 
/*   output[
    'thor ',
    'ironMan ',
    'spiderMan',
    [ 'superman ', 'Batman', 'flash' ]
  ]
  */
 /*here is the problem while running this program it display array and also display another array 
 inside it. it accept any datatype so it count  [ 'superman ', 'Batman', 'flash' ] as a single
 element so the overal element is 4*/

//console.log(marvelHeros[3][1]);
//const allHeros = marvelHeros.concat(dc_heros)
//console.log(allHeros);    //[ 'thor ', 'ironMan ', 'spiderMan', 'superman ', 'Batman', 'flash' ]

//push work on existing array but concat written new array .

// like concat there is another method spreade

const allHeros =[...marvelHeros,...dc_heros]
//console.log(allHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_another_array= anotherArray.flat(Infinity)
console.log(real_another_array);  
 
/*
output
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/

console.log(Array.isArray("Manish"));
console.log(Array.from("manish"));

console.log(Array.from({name:"Manish"}));   //interesting []
/// similar example
//situation is there is multiple variable and array and we need to convert to array
let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ]
