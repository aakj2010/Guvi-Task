async function getWeatherData() {

    let res = await fetch(`https://restcountries.com/v3.1/all`);
    let res1 = await res.json();
    console.log(res1);

    let titl = res1[0].name.common;
    let lat = res1[0].latlng[0];
    let lan = res1[0].latlng[1];
    let capital = res1[0].capital;
    let region = res1[0].region;
    let fl = res1[0].flags.svg;
    let cc = res1[0].car.signs;


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
    let reg = document.getElementById("region").innerText = `Region : ${region}`
    let code = document.getElementById("cc").innerText = `Country Code : ${cc}`

    let weather = document.getElementById("weather")
    weather.addEventListener('click', () => {
        let para = document.getElementById("wet");
        para.innerText = `Weather :\n ${weather2} \n ${weather1} \n Wind : ${wind}km \n Humidity : ${humidity}
                                Min_Temp:${min_temp} \n Max_Temp : ${max_temp}`;
    })


    let resp = await fetch("https://restcountries.com/v3.1/all");
    let resp1 = await resp.json();
    console.log(resp1);

    let titl1 = resp1[1].name.common;
    let lat1 = resp1[1].latlng[0];
    let lan1 = resp1[1].latlng[1];
    let capital1 = resp1[1].capital;
    let region1 = resp1[1].region;
    let fl1 = resp1[1].flags.svg;
    let cc1 = resp1[1].car.signs;

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
    let regc = document.getElementById("region1").innerText = `Region : ${region1}`
    let codec = document.getElementById("cc1").innerText = `Country Code : ${cc1}`

    let weathe = document.getElementById("weather1")
    weathe.addEventListener('click', () => {
        let para1 = document.getElementById("wet1");
        para1.innerText = `Weather :\n ${weather3} \n ${weather4} \n Wind : ${wind1}km \n Humidity : ${humidity1}
                            Min_Temp:${min_temp1} \n Max_Temp : ${max_temp1}`;
    })


    let respo = await fetch(`https://restcountries.com/v3.1/all`);
    let respo1 = await respo.json();
    console.log(respo1);

    let titl2 = respo1[2].name.common;
    let lat2 = respo1[2].latlng[0];
    let lan2 = respo1[2].latlng[1];
    let capital2 = respo1[2].capital;
    let region2 = respo1[2].region;
    let fl2 = respo1[2].flags.svg;
    let cc2 = respo1[2].car.signs;

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
    let regs = document.getElementById("region2").innerText = `Region : ${region2}`
    let codes = document.getElementById("cc2").innerText = `Country Code : ${cc2}`

    let weath = document.getElementById("weather2")
    weath.addEventListener('click', () => {
        let para2 = document.getElementById("wet2");
        para2.innerHTML = `Weather :\n ${weather5} \n ${weather6} \n Wind : ${wind2}km \n Humidity : ${humidity2}\n
                            Min_Temp:${min_temp2} \n Max_Temp : ${max_temp2}`;
    })

}
getWeatherData()