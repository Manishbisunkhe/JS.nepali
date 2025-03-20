//for of

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}
// output
// 1
// 2
// 3
// 4
// 5
const greetings ="Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}
// output and also practice remove space by using break ,continue
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d


//Map

const map = new Map();
map.set('NP', 'Nepal');
map.set('IN', 'India');
map.set('FR', 'France');
map.set('NP', 'Nepal');

// console.log(map);

// output ------only take unique value
// Map(3) { 'NP' => 'Nepal', 'IN' => 'India', 'FR' => 'France' }


for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}
// output
// NP :- Nepal
// IN :- India
// FR :- France

// for object

// const MyObject ={
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of MyObject) {
//     console.log();
// }   not working from this