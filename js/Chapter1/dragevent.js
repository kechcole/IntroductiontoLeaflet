// Coordinates of a dragged marker event 

// Initialise map object
var event3 = L.map("event3").setView([-1.28333, 36.81667], 8);

// Add tile layer to map.
var Esri_WorldStreetMap = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(event3);


var myMarker = L.marker([-1.28333, 36.81667],
    { title: "MyPoint", alt: "The Big I", draggable: true }).addTo(event3);


event3.on('click', function (e) {

    var position = e.latlng;

    console.log('You clicked at' + position );

    // myMarker.setLatLng(position, {
    //     draggable: 'true'
    // }).bindPopup(position).update();
});





