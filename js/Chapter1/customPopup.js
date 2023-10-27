//  A custom function that gives markers custom messages and 
// customised markers. 

// Initialise map object
var customFun = L.map("customFun").setView([-1.28333, 36.81667], 7);

// Add tile layer to map.
var Esri_WorldTopoMap = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(customFun);


            // Custom popup size
// Markers with customized popup messaged, has width and custom CSS name
var marker1 = L.marker([-1.28, 36.81]).addTo(customFun)
    .bindPopup('I am a custom marker Around Nairobi area, just an approximation',
        { 'maxWidth': '1000', 'className': 'custom' });


var marker3 = L.marker([0.51, 35.26]).addTo(customFun)
    .bindPopup('I am a custom marker Around Eldoret area, just an approximation',
        { 'maxWidth': '100', 'className': 'custom' });



            // Custom popup message
// Marker that takes content from a function
// Note the function has been hoisted. 
var marker4 = L.marker([-4.04, 39.66]).addTo(customFun)
    .bindPopup(createPopup('I am a custom marker in Mombasa area.'));

var marker4 = L.marker([-3.40, 38.55]).addTo(customFun)
    .bindPopup(createPopup('I am a custom marker in Voi area.'));

var marker4 = L.marker([-2.10, 37.36]).addTo(customFun)
    .bindPopup(createPopup('I am a custom marker in Sultan Hamud area.'));

var marker4 = L.marker([-1.51, 37.26]).addTo(customFun)
    .bindPopup(createPopup('I am a custom marker in Machakos area.'));


// Custom function 
function createPopup(msg) {

    return L.popup({ keepInView: true, closeButton: false })
    .setContent(msg);
};