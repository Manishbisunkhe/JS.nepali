const coding =["js","ruby","pythone","java","cpp"]

// coading.forEach( function (item) {
//     console.log(item);
// //     js
// // ruby
// // pythone
// // java
// cpp
// })

// using basic array function
// coding.forEach((item) => {
    // console.log(item);
//     js
// ruby
// pythone
// java
// cpp
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// js
// ruby
// pythone
// java
// cpp

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })
// js 0 [ 'js', 'ruby', 'pythone', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'pythone', 'java', 'cpp' ]
// pythone 2 [ 'js', 'ruby', 'pythone', 'java', 'cpp' ]
// java 3 [ 'js', 'ruby', 'pythone', 'java', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'pythone', 'java', 'cpp' ]



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python", 
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{

    console.log(item.languageName);
})

// javascript
// java
// pytho