// Draw Different shapes, circle, rectangle and triangel

// Rectangle , Upper left, Lower right corners
var areaCoord = [[-0.3524, 35.1982], [-0.5593, 35.3703]];

// Triangle, 3 corners
var triCoord = [[-0.3616, 35.4935], [-0.4875, 35.6610], [-0.5327, 35.4410]];

// Circle , one point 
var cirCoord = [-0.4374, 35.0400];

// Initialise map object around mau
var area = L.map("area").setView([-0.4407, 35.3098], 9);

// Instantiate rectangle object and give red colour, slightly opaque
var nrbRegion = L.rectangle(areaCoord,
    { color: 'red', fillColor: "purple", fillOpacity: 0.5 }).addTo(area);

// Instantiate polygon object and give blue color
var recRegion = L.polygon(triCoord, { color: 'blue' }).addTo(area);

// Instantiate circle , radius 10km, and fill with yellow colour, no opacity
var cirRegion = L.circle(cirCoord, 10000,
    { color: 'orange', weight: 8, fillColor: "yellow", fillopacity: 1 }).addTo(area);


// Add tile layer bounded around the equator in Kenya.
var OpenStreetMap_CH = L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'www.openstreetmap.org',
    bounds: [[-3.25, 33.57], [3.23, 40.36]]
}).addTo(area);


