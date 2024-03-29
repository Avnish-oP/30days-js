async function weather(){
    let delhiWeather= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({temp:30,condition:"Sunny"});
        },2000);
    });
    let mumbaiWeather = new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve({temp:35,condition:"Cloudy"});
        },5000);
    })
    let weatherFromDelhi= await delhiWeather;
    let weatherFromMumbai= await mumbaiWeather;
    console.log( [weatherFromDelhi,weatherFromMumbai]);
    return [weatherFromDelhi,weatherFromMumbai];
};
let currentWeather=weather();
console.log(currentWeather);