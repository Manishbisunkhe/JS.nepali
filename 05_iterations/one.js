//for


for (let i = 0; i <10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    //  console.log(element);
}
/*output  0
1
2
3
4
5 is the best number
5
6
7
8
9*/


for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
//    console.log(`inner loop value: ${j} and inner loop ${i}`);  
//    console.log(i + '*' + j +'=' +i*j);  
    }
    
}

let MyArray =["flash", "bat", "Super"]
// console.log(MyArray.length);
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
}

// break and continue

for (let i = 1; i <=20 ; i++) {
    if (i ==5) {
        console.log(`detected 5 `);
        break
    }
     console.log(`the value of i is ${i}`);    
}

// output of break
// the value of i is 1
// the value of i is 2
// the value of i is 3
// the value o


for (let i = 1; i <=20 ; i++) {
    if (i ==5) {
        console.log(`detected 5 `);
        continue
    }
     console.log(`the value of i is ${i}`);    
}

// output of continue
// the value of i is 1
// the value of i is 2
// the value of i is 3
// the value of i is 4
// detected 5
// the value of i is 6
// the value of i is 7
// the value of i is 8
// the value of i is 9
// the value of i is 10
// the value of i is 11
// the value of i is 12
// the value of i is 13
// the value of i is 14
// the value of i is 15
// the value of i is 16
// the value of i is 17
// the value of i is 18
// the value of i is 19
// the value of i is 20