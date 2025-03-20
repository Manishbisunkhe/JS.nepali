const driscripter = Object.getOwnPropertyDescriptors(Math, "PI")
// console.log(driscripter);


// console.log(Math.PI );
// Math.PI = 5
// console.log(Math.PI);


const tea = {
    name: 'ginger tea',
    price: 30,
    isAvailable: true 
}
// console.log(tea);
console.log(Object.getOwnPropertyDescriptor(tea, "name"));

Object.defineProperty(tea, 'name',{
    writable: false,
    enumerable: false,  
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
