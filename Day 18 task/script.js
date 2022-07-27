
async function getWeatherData() {
    let response = await fetch(`https://restcountries.com/v3.1/all`);
    let res1 = await response.json();
    console.log(res1);

    var container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);

    res1.forEach(country => {
        var card = document.createElement("div");
        card.setAttribute("class", "col-lg-4 col-md-6 col-sm-12 col-12")
        row.appendChild(card);

        var head = document.createElement("div");
        head.setAttribute("class", "card-header");
        head.innerText = country.name.common;
        card.appendChild(head);

        var cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        card.appendChild(cardbody);

        var image = document.createElement("img");
        image.setAttribute("class", "flag-img");
        image.setAttribute("src", country.flags.png);
        cardbody.appendChild(image);

        var cap = document.createElement("p");
        cap.setAttribute("class", "capital");
        cap.innerHTML = `<p>Capital:${country.capital}</p>`;
        cardbody.appendChild(cap);
        var reg = document.createElement("p");
        reg.setAttribute("class", "region");
        reg.innerHTML = `<p>Region:${country.region}</p>`;
        cardbody.appendChild(reg);
        var code = document.createElement("p");
        code.setAttribute("class", "codes");
        code.innerHTML = `<p>Country Code:${country.cca3}</p>`;
        cardbody.appendChild(code);

        let weather = document.createElement("button");
        weather.setAttribute("type", "button");
        weather.setAttribute("class", "btn btn-light");
        weather.innerText = "Click for Weather";
        weather.addEventListener("click", function () {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=d8e18563b7ec953e861ebb549a4bb5bc`)
                .then((res) => res.json())
                .then((weatherdata) => {
                    alert(`The Weather of ${country.name.common} is Temperature ${weatherdata.main.temp}, windspeed ${weatherdata.wind.speed}, longitude ${weatherdata.coord.lon}, latitude ${weatherdata.coord.lat}`);
                }).catch((error) => {
                    alert('No weather found');
                })
        })
        cardbody.appendChild(weather);

    })

}
getWeatherData()
