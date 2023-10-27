// A draggable marker at the Capital Nairobi.

// Initialise map object
var map4 = L.map("map4").setView([-1.28333, 36.81667], 6);

// Create marker
var nrbMarker = L.marker([-1.28333, 36.81667], 

    // Optional parameters 
    {title:"Nairobi City", alt:"A Marker in Nairobi Kenya", draggable:true}
    ).addTo(map4); 

// Add tile layer 
var Stadia_Outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: ["stadia.com"]
}).addTo(map4);