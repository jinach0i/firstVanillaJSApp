function onGeoOK(position) {
    console.log(position);
}
function onGeoError() {
    console.log("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);