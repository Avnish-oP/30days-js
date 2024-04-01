// var addTwoPromises = async function(promise1, promise2) {
//     const values = await Promise.all([promise1, promise2])
//     console.log(values)
//     return values[0]+values[1]
// }
    

// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
async function sleep(millis) {
    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis)
        },millis)
    })
    
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) 