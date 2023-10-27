                // Group Layers 

            // Initialise map object
var groupLayer = L.map("groupLayer").
    setView([-1.28333, 36.81667], 8);

        // Add tile layer bounded around the equator in Kenya.
var OpenStreetMap_France = L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    {
        maxZoom: 20,
        attribution: 'openstreetmap.org'
    }).addTo(groupLayer);


        // Instantiate object using their coords and add pop ups
// Marker 1
var point = L.marker([-1.28, 36.81]).bindPopup("I am a marker");

// Marker 2
var point2 = L.marker([-1.62, 36.53]).bindPopup("I am a marker");

// Marker 3
var point3 = L.marker([-1.02, 37.11]).bindPopup("I am a marker");

// Road 
var roadCoords = L.polyline([
    [-1.08, 36.81], [-0.27, 37.80], [-1.30, 38.00]]).
    bindPopup("I am a road.");

            // Group all the layers into a single unit
var coleLayerGroup = L.layerGroup([point, point2, point3]).
    addLayer(roadCoords).addTo(groupLayer);


        // Remove a layer from group
groupLayer.removeLayer(point3);  // point 3


            // Add a layer to group 
// Creating a circle
var circle = L.circle([-1.28, 36.81], 50000,
    {
        color: 'red', fillColor:
            '#f03', fillOpacity: 0
    });

// Adding circle to the layer group
coleLayerGroup.addLayer(circle);
