const API_Key="f685ae0410e58f89a90332f327f10bea";
function onGeoOK(position) {
    const lat=position.coords.latitude,
    lon=position.coords.longitude,
    url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric&lang=kr`;
    console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const weather=document.querySelector('#weather span:last-child'),
        city=document.querySelector('#weather span:first-child');
        city.innerText=data.name;
        weather.innerText=`${data.main.temp+"°C"}/${data.weather[0].description}`;
    });

}
function onGeoError() {
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);