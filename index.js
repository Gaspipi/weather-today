


function clima(city, country){
    city = city.replace(/ /g, "");
    country = country.replace(/ /g, "");
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
        local.innerHTML = response.data[0].city_name + '<sub> ' + response.data[0].country_code  + '</sub>';
        const img = document.getElementById('img');
        img.src = '/animated/' + response.data[0].weather['icon'] + '.svg';
        const temp = document.getElementById('temp');
        temp.innerHTML = response.data[0].temp + '<span>&#8451;</span>';
        const desc = document.getElementById('desc');
        desc.innerHTML = response.data[0].weather['description'];
    })
	.catch(err => {console.error(err)});
}

function setClima() {
    city = document.getElementById("city").value
    country = document.getElementById("country").value
    if (city != '' && country != ''){
        clima(city, country)
    }
    else{
        alert('Debes indicar tanto ciudad como pais antes  de realizar una busqueda.')
    }
    
    }