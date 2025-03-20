const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
        
    }, 1000)
})
 
.then(function(){
    console.log('happy');
    
})
  const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "anish", email:'anish@example.com', contact:987654321 })

    }, 1000)
  })

  promiseThree.then(function(user){
    console.log(user);
    
  })

  const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "anish", password: "123"})
        }else{
            reject('ERROR:Something went wrong')
        }

    }, 2000)
  })
  promiseFour
  .then((user) =>{
    console.log(user);
    return user.username
    
  })
  .then((username)=>{
    console.log(username); 
  })
  .catch(function(error){
    console.log(error);
    
  }).finally(()=> console.log("the promise is either resolved or reject"));
  

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "js", password: "123"})
        }else{
            reject('ERROR:js went wrong')
        }

    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

