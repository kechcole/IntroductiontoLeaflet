// Initialise map1 object.
var map = L.map("map1").setView([-1.28333, 36.81667], 13);

// google terrain Tile layer
googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

// Add to map
googleTerrain.addTo(map);