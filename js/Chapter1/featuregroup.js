            // Feature Group

            // Initialise map object
var featureGroup = L.map("featureGroup").setView([-1.28333, 36.81667], 8);

        // Add tile layer bounded around the equator in Kenya.
var OpenStreetMap_France = L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    {
        maxZoom: 20,
        attribution: 'openstreetmap.org'
    }).addTo(featureGroup);


            // Instantiate objects
var point = L.marker([-1.28, 36.81]);  // Marker 1

// Creating a circle
var circle = L.circle([-1.28, 36.81], 50000);

// Road
var roadCoords = L.polyline(
    [[-1.08, 36.81], [-0.27, 37.80], [-1.30, 38.00]]);


        // Group features , add to map with popup, event and style
var coleFeatureGrp = L.featureGroup(
    [point, circle, roadCoords]).addTo(featureGroup)
    .setStyle({ color: 'purple', opacity: .5 })
    .on('click', function () { alert('Clicked on a member of the group!'); })
    .bindPopup("We have the same pop up coz we are a group.");


        // Add a layers to group 

// This circle will have a different colour as other layers but 
// it has a pop up messsage for the group 
var circle2 = L.circle([-0.27, 37.80], 25000);  // circle 2 

// Adding circle2 to the layer group
coleFeatureGrp.addLayer(circle2);


        // Add circle to map, NOT part of the group thus no 
        // group pop up message and will have adefault colour
var circle3 = L.circle([-1.30, 38.00], 25000).addTo(featureGroup);

