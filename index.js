function iconSelect(icon){
    switch (icon){
        case t01d || t02d || t03d:
            return ('')
        case t01n || t02n || t03n:
            return ('')
        case t04d || t05d:
            return ('')
        case t04n || t05n:
            return ('')
        case c02d:
            return ('cloudy-day-1.svg')
        }
}
function clima(city, country){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c7c29393edmshf35a0d72bfb4861p19f174jsnc5a1ccccae51',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?city=${city}&country=${country}&units=metric`, options)
	.then(response => response.json())
	.then(response => {console.log(response)
        const local = document.getElementById('local');
        local.innerHTML = response.data[0].city_name;
        const sub = document.getElementById('sub');
        sub.innerHTML = response.data[0].id
        const img = document.getElementById('img');
        img.src = '/animated/' + iconSelect(response.data[0].weather['icon']);
        img.width = 120
        img.height = 120
        const temp = document.getElementById('temp');
        temp.innerHTML = response.data[0].temp + '<span>&#8451;</span>';
        const min = document.getElementById('min');
        min.innerHTML = response.data[0].weather['description'];
        const max = document.getElementById('max');
        max.innerHTML = response.data[0].weather['description'];
        const desc = document.getElementById('desc');
        desc.innerHTML = response.data[0].weather['description'];
    })
	.catch(err => {console.error(err)});
}

function setClima() {
    city = document.getElementById("city").value
    country = document.getElementById("country").value
    if (city != null && country != null){
        clima(city, country)
    }
    
    }

setClima('Rosario','Argentina');