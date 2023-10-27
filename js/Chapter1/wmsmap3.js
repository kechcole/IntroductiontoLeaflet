// Initialise map object
var wmsdiv2 = L.map("wmsdiv2").setView([-1.28333, 36.81667], 3);

// Add two layers , smooth dark at the bottom and SRTM30 at top but transparent 

// Add smooth dark tile layer to cover areas in the ocean 
smoothDark = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    {
        maxZoom: 20,
        attribution: ["stadiamaps.com"]
    }).addTo(wmsdiv2);


// Add an SRTM30 Coloured wms layer , has no data for ocean areas 
var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'SRTM30-Colored-Hillshade',  // SRTM Image  
    format: "image/png",     // format 
    transparency: true,      // Make it transparent 
    opacity: 0.6,            // set opacity 
    attribution: "Mundialis" // Citing a source
}).addTo(wmsdiv2);
