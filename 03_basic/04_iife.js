// Immediately invoked Function Expressions (IIFE)


function chai(){
    console.log(`DB CONNECTED`);
}
chai();


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();



//()() defination of function and second one is used for execution call
//global scope ko pollution bata problem hunxa kailay kai so the variable
//or any decleration in global scope to remove pollution we have used iife



( () => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO`);
})();



( (name) => {
    // PARAMETER PASS IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('MANISH')



