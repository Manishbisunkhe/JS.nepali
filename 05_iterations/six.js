// const coding =["js","ruby","pythone","java","cpp"]

// const value coding.forEach((item)=>){
    // console.log(item);
    //  return item
// }
// console.log(values);

const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for basic filter
// const newNums =myNums.filter( (num)=> num>4 )
// console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]

// good way to use  filter
// const newNums = myNums.filter( (num)=> {
//     return num>4
// })
// console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]

// using for each loop

// const newNums =[]
// myNums.forEach( (num)=> {
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]

const books= [
    {title: 'book one', genre:'Friction', publish:1981, edition:2004},
    {title: 'book two', genre:' non-Friction', publish:1982, edition:2005},
    {title: 'book three', genre:'history', publish:1983, edition:2006},
    {title: 'book four', genre:'non-Friction', publish:1984, edition:2007},
    {title: 'book five', genre:'science', publish:1985, edition:2008},
    {title: 'book six', genre:'Friction', publish:1986, edition:2009},
    {title: 'book seven', genre:'history', publish:1988, edition:2010},
    {title: 'book eight', genre:'science', publish:1989, edition:2011},
    {title: 'book nine', genre:' non-Friction', publish:1990, edition:2012},
]
let userBooks = books.filter( (bk) =>bk.genre==='history')
userBooks= books.filter( (bk)=>{ return bk.publish >=1983} )
userBooks= books.filter( (bk)=>{ 
    return bk.publish >=1983 && bk.genre ==="science"} )
console.log(userBooks);

