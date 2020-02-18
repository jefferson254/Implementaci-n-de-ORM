const mymap = L.map('mapa').setView([-0.373154,-78.500779], 55)
const marker = L.marker([51.5, -0.09]).addTo(mymap);
const attribution= '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
const tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl,{attribution})
const api_url='https://api.wheretheiss.at/v1/satellites/25544'
tiles.addTo(mymap)


const popup = L.popup()
    .setLatLng([-0.093582, -78.454439])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the la casa de Jefferson " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);