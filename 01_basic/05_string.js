const name = "manish"
const repoCount = 50
// console.log(name+repoCount+" value"); [old output way don't use it ]
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//[new output way use it]
// new keyword define object of js

const gameName = new String('manishBisunke')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());//MANISH
console.log(gameName.charAt(4));//s
console.log(gameName.indexOf('a'));//1      

const newString = gameName.substring(0, 4)
console.log(newString);//mani

const anotherString = gameName.slice(-13, 7)//isunkhe
console.log(anotherString);

const newStringOne = "   manish   "
console.log(newStringOne);//    manish
console.log(newStringOne.trim());//trim remove spaces automatic//manish


const url = "http://manish.com/manish%20bisunkhe"
console.log(url.replace('%20','-'));    //http://manish.com/manish-bisunkhe

// include---check/Find the word 
console.log(url.includes('manish'));//True
console.log(url.includes('bisunkhe'));//true
console.log(url.includes('-'));//false
console.log(url.includes('%'));//true
console.log(url.includes('WTF'));//false

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
 
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]





