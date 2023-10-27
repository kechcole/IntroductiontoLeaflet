// Event listener that pops up a message when map
// is clicked. 


// Initialise map object
var event1 = L.map("event1").setView([-1.28333, 36.81667], 8);

// Add tile layer to map.
var OpenStreetMap_BZH = L.tileLayer(
    'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'www.openstreetmap.bzh'
}).addTo(event1);

// Event handler, calls on() method 
event1.on('click', function () {
    alert("You clicked the map");
});