// Coordinates of a polyline. '
var roadCoords = [
    [-1.2825722494272753,36.81709800196538],
    [-1.2713779491492119,36.82829508310408],
    [-1.2655374253601508,36.83754484578321],
];

// Miltiple lines 
var roadsCoords = [
    [
[-1.2504493448452934,36.859939008061644],
[-1.242330445359272,36.86775672546196],
[-1.2307816577162782,36.87537019946086],
    ], [
[-1.210046209250848,36.90976209924867],
[-1.1830466275521019,36.93534622934109],
[-1.170257259936946,36.95204698093053],
    ]
]

// Initialise map object
var road = L.map("road").setView([-1.28333, 36.81667], 10);

// Instatiate polyline objects 
var polyline = L.polyline(roadCoords, 
    {color: 'red', weight:10}).addTo(road);

var polylines = L.polyline(roadsCoords, 
    {color: 'purple', weight:6}).addTo(road);

// Add tile layer 
var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: "OSM"
}).addTo(road);
