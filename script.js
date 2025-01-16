const inputbox =document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weatherimg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const windspeed= document.getElementById('wind-speed');
const loactionnotfound= document.querySelector('.loaction-not-found');
const weather_body = document.querySelector('.weather-body');  

 async function checkweather( city){
 const apikey="e01c758c84c71a34a8fbf0aa78191537";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
 
 const response = await fetch(url);
 const weatherdata = await response.json();

 //const weatherdata = await fetch(`${url}`) .then(response =>response.json() );
 console.log(weatherdata );
  
if(weatherdata.cod===`404`){
    loactionnotfound.style.display="flex";
    weather_body.style.display = "none";
    return;
}

loactionnotfound.style.display="none";
weather_body.style.display = "flex";

temperature.innerHTML = `${ Math.round(weatherdata.main.temp -273.15)}°C`;
discription.innerHTML=`${weatherdata.weather[0].description}`;
humidity.innerHTML=`${weatherdata.main.humidity} %`;
windspeed.innerHTML=`${weatherdata.wind.speed} km/hr`;


  switch(weatherdata.weather[0].main){
    case'Clouds':
    weatherimg.src="cloud.png";
    break;
     
    case'Clear':
    weatherimg.src="clear.png";
        break;

    case'Rain':
    weatherimg.src="rain.png";
    break;

    case'Mist':
    weatherimg.src="mist.png";
    break;

    case'Snow':
    weatherimg.src="snow.png";
    break;


  }


}


searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
});