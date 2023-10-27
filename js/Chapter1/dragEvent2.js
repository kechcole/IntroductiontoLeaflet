

// Initialise map object
var event4 = L.map("event4").setView([52.96228865548326, -7.499542236328124], 8);

// Add tile layer to map.
var Esri_DeLorme = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
    minZoom: 1,
    maxZoom: 11
}).addTo(event4);






