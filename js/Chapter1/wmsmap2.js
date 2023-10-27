// Initialiose map object
var wmsdiv = L.map("wmsdiv").setView([-1.28333, 36.81667], 8);

// Add a wms layer 
var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'TOPO-OSM-WMS',  // WOrld topography image 
    format: "image/png",     // format 
    attribution: "Mundialis" // Citing a source
}).addTo(wmsdiv);

