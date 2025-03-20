// we can choose any method to select
const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();

}, 2000);


