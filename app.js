let h2 = document.querySelector('h2')
var map;

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude)
    h2.textContent = `Latitude ${pos.coords.latitude}, Longitude ${pos.coords.longitude}`

    if(map === undefined){
         map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }else{
        map.remove()
         map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
    .bindPopup('Eu estou aqui!')
    .openPopup();
}

var whatchID =  navigator.geolocation.watchPosition(success)

