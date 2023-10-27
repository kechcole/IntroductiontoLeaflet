// Popups

// Initialise map object
var popupMap = L.map("popupMap").setView([-1.28333, 36.81667], 8);

// Add tile layer bounded around the equator in Kenya.
var Stamen_Watercolor = L.tileLayer(
    'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
    {
        attribution: ['openstreetmap.org', 'stamen.com', 'creativecommons.org'],
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'jpg'
    }).addTo(popupMap);


// Instantiate object layers 

// Bind pop up
var point = L.marker([-1.28, 36.81]).bindPopup('I am a coordinate point')
    .addTo(popupMap);  // Marker 1


// Stand alone popup 
// Instantiate popup object from its class and assign to objects
var popoup = L.popup().setContent('<p>Hello !! <br> This is a nice popup <p>')
    .setLatLng([-0.12, 36.10])
    .openOn(popupMap);


// Creating a circle object and bind popup.
var circle = L.circle([0.00, 34.81], 50000)
    .bindPopup("<h1>Circle Marker</h1><p>This is information about the marker</p><ul><li>Radius of 50Km</li><li>At Nairobi </li></ul > ")
    .addTo(popupMap);


// Create triangle and add pop up
var triCoord = L.polygon(
    [[-0.3616, 35.4935], [-1.4875, 35.6610], [-0.5327, 37.4410]],
    { color: 'blue' }).bindPopup('<b>This is a triangle.<b>')
    .addTo(popupMap);