// slideshow
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 3000);


// map
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// add dream destinations
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris ❤️");
L.marker([35.6762, 139.6503]).addTo(map).bindPopup("Tokyo ✨");
L.marker([40.7128, -74.0060]).addTo(map).bindPopup("New York 💕");
