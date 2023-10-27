// Event that adds Markers


// Initialise map object
var event2 = L.map("event2").setView([-1.28333, 36.81667], 8);

// Add tile layer to map.
var Stamen_Toner = L.tileLayer(
    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    attribution: ['creativecommons.org', 'www.openstreetmap.org/copyright'],
    subdomains: 'abcd',
    minZoom: 0, maxZoom: 20, ext: 'png'
}).addTo(event2);


// Event listener with an anonymous function
var clickCount = 0;  // Initialise marker counter
event2.on('click', function (e) {

    // Event objects
    var lat = String(e.latlng.lat),
        lng = String(e.latlng.lng);

        ++clickCount;   // Increase marker count by one 

        // Pop up content
    var popupContent = "<h3>Marker " + clickCount + "</h3>"

        + "<p>Point coordinates:</p>"

        + "<ul><li>Latitude: " + lat + "</li>"

        + "<li>Longitude: " + lng + "</li></ul>";

    // Create new object add popup and add to map 
    new L.marker(e.latlng,
    { title: "Click to see map coordinates" }).bindPopup(popupContent)
    .addTo(event2);
});