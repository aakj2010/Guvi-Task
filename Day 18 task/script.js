async function getWeatherData() {

    // let input = document.getElementById("txt").value;

    let res = await fetch(`https://restcountries.com/v3.1/all`);
    let res1 = await res.json();
    console.log(res1);

    // for(i=0;i<res1.length;i++){
        
    //     console.log(res1[i]);
    // }

    let titl = res1[0].name.common;
    console.log(titl);

    let lat = res1[0].latlng[0];
    console.log(lat);
    let lan = res1[0].latlng[1];
    console.log(lan);

     let capital = res1[0].capital;
     console.log(capital);
     let region = res1[0].region;
     console.log(region);

     let fl = res1[0].flags.svg;
     console.log(fl);

     let cc = res1[0].car.signs;
     console.log(cc);

    let wet = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=d8e18563b7ec953e861ebb549a4bb5bc`)
    let wet1 = await wet.json();
    console.log(wet1);

    
    
    let weather1 = wet1.weather[0].description;
    let weather2 = wet1.weather[0].main;
    let wind = wet1.wind.speed;
    let humidity = wet1.main.humidity;
    let min_temp = wet1.main.temp_min;
    let max_temp = wet1.main.temp_max;
    
    let flag = document.getElementById("flag").src = `${fl}`
    let title = document.getElementById("title").innerText = `${titl}`
    let cap = document.getElementById("capital").innerText = `Capital : ${capital}`
    let reg = document.getElementById("region").innerText =`Region : ${region}`
    let code = document.getElementById("cc").innerText =`Country Code : ${cc}`

    let weather = document.getElementById("weather")
        weather.addEventListener('click',()=>{
            let para = document.getElementById("wet");
            para.innerText = `Weather :\n ${weather2} \n ${weather1} \n Wind : ${wind}km \n Humidity : ${humidity}
                                Min_Temp:${min_temp} \n Max_Temp : ${max_temp}`;
    })


let resp = await fetch("https://restcountries.com/v3.1/all");
let resp1 = await resp.json();
console.log(resp1);

let titl1 = resp1[1].name.common;
console.log(titl1);

let lat1 = resp1[1].latlng[0];
console.log(lat1);
let lan1 = resp1[1].latlng[1];
console.log(lan1);

 let capital1 = resp1[1].capital;
 console.log(capital1);

 let region1 = resp1[1].region;
 console.log(region1);

 let fl1 = resp1[1].flags.svg;
 console.log(fl1);

 let cc1 = resp1[1].car.signs;
 console.log(cc1);

let weth = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lan1}&appid=d8e18563b7ec953e861ebb549a4bb5bc`)
let weth1 = await weth.json();
console.log(weth1);

let weather3 = weth1.weather[0].description;
let weather4 = weth1.weather[0].main;
let wind1 = weth1.wind.speed;
let humidity1 = weth1.main.humidity;
let min_temp1 = weth1.main.temp_min;
let max_temp1 = weth1.main.temp_max;

let flagc = document.getElementById("flag1").src = `${fl1}`
let titlec = document.getElementById("title1").innerText = `${titl1}`
let capc = document.getElementById("capital1").innerText = `Capital : ${capital1}`
let regc = document.getElementById("region1").innerText =`Region : ${region1}`
let codec = document.getElementById("cc1").innerText =`Country Code : ${cc1}`

let weathe = document.getElementById("weather1")
    weathe.addEventListener('click',()=>{
        let para1 = document.getElementById("wet1");
        para1.innerText = `Weather :\n ${weather3} \n ${weather4} \n Wind : ${wind1}km \n Humidity : ${humidity1}
                            Min_Temp:${min_temp1} \n Max_Temp : ${max_temp1}`;
})



let respo = await fetch(`https://restcountries.com/v3.1/all`);
let respo1 = await respo.json();
console.log(respo1);

let titl2 = respo1[2].name.common;
console.log(titl2);

let lat2 = respo1[2].latlng[0];
console.log(lat2);
let lan2 = respo1[2].latlng[1];
console.log(lan2);

 let capital2 = respo1[2].capital;
 console.log(capital2);
 let region2 = respo1[2].region;
 console.log(region2);

 let fl2 = respo1[2].flags.svg;
 console.log(fl2);

 let cc2 = respo1[2].car.signs;
 console.log(cc2);

let we = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=d8e18563b7ec953e861ebb549a4bb5bc`)
let we1 = await we.json();
console.log(we1);

let weather5 = we1.weather[0].description;
let weather6 = we1.weather[0].main;
let wind2 = we1.wind.speed;
let humidity2 = we1.main.humidity;
let min_temp2 = we1.main.temp_min;
let max_temp2 = we1.main.temp_max;

let flags = document.getElementById("flag2").src = `${fl2}`
let titles = document.getElementById("title2").innerText = `${titl2}`
let caps = document.getElementById("capital2").innerText = `Capital : ${capital2}`
let regs = document.getElementById("region2").innerText =`Region : ${region2}`
let codes = document.getElementById("cc2").innerText =`Country Code : ${cc2}`

let weath = document.getElementById("weather2")
    weath.addEventListener('click',()=>{
        let para2 = document.getElementById("wet2");
        para2.innerHTML = `Weather :\n${weather5} \n ${weather6} \n Wind : ${wind2}km \n Humidity : ${humidity2}
                            Min_Temp:${min_temp2} \n Max_Temp : ${max_temp2}`;
})



}
getWeatherData()