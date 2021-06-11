let btn=document.querySelector(".btn");
var input=document.querySelector(".input");
var cityName=document.querySelector(".city");
var descr=document.querySelector(".des");
var minTemp=document.querySelector(".min-temp");
var maxTemp=document.querySelector(".max-temp");
var apik="8360dc43b251abc5e1e6d4e443f3383b";
btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apik)
    .then(res=>res.json()).then(data=>{
        console.log(data);
        if(data.cod==404)
        {
            cityName.innerHTML=data.message;
        }
        else{

            cityName.innerHTML="City Name : "+data.name;
            descr.innerHTML=data.weather[0].description;
            minTemp.innerHTML="Minimum Temperature : "+(data.main.temp_min-273).toFixed(2)+"&#176 C" ;
            maxTemp.innerHTML="Maximum Temperature : "+(data.main.temp_max-273).toFixed(2)+"&#176 C" ;
        }


    });
  });
  