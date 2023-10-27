         // Group polygons and roads 

// Grouped triangles coords
var twoTriangleCoord = [    // Triangle 1
    [[-0.3524, 35.1982], [-0.5593, 35.3703], [-0.35, 35.37]],
    // Triangle 2
    [[-0.3616, 35.4935], [-0.4875, 35.6610], [-0.5327, 35.4410]]
]

// Grouped roads coords
var roads = [    // Road 1
    [[-0.27, 34.98], [-0.08, 35.07], [-0.03, 35.28], [-0.19, 35.36]],
    // Road 2
    [[0.11, 35.63], [-0.12, 34.44], [-0.26, 35.59], [-0.46, 35.50]]
];


        // Initialise map object around mau
var areas = L.map("areas").setView([-0.4407, 35.3098], 9);

// Add tile layer bounded around the equator in Kenya.
var OpenStreetMap_CH = L.tileLayer(
    'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: 'www.openstreetmap.org',
    bounds: [[-3.25, 33.57], [3.23, 40.36]]}).addTo(areas);

// Instantiate multipolygon object with a pop up, add to map
var multipolygon = L.polygon(twoTriangleCoord,
    { color: '#33fffc', weight: 8 }).addTo(areas).
    bindPopup("We are the same triangle layer");

// Instantiate multiline object with a pop up, add to map
var multiline = L.polyline(roads,
    { color: '#f333ff', weight: 8 }).addTo(areas).
    bindPopup("We are the same line layer");




