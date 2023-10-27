// Symbol map Event.
// Displays distance between click point and centroid of a layer.  

// Density Heat map of Kenyan cities using GeoJSON Data

// Kenyan cities population data , pop
var cityPopKenya = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "city": "Nakuru", "pop": 356777 }, "geometry": { "coordinates": [36.06900776648942, -0.2692405137752445], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Nairobi", "pop": 1008654 }, "geometry": { "coordinates": [36.83440385761696, -1.3009136605425198], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Naivasha", "pop": 250000 }, "geometry": { "coordinates": [36.432857458163056, -0.7116898947238894], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Nyeri", "pop": 600674 }, "geometry": { "coordinates": [36.95718047952491, -0.42591520687876994], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Embu", "pop": 300897 }, "geometry": { "coordinates": [37.46473564510558, -0.5432077389339867], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Machakos", "pop": 567890 }, "geometry": { "coordinates": [37.272957927703885, -1.5238118914734997], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Kericho", "pop": 789600 }, "geometry": { "coordinates": [35.293290462876, -0.37044811708445025], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Eldoret", "pop": 567688 }, "geometry": { "coordinates": [35.276378583016026, 0.5230726184586416], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Kibwezi", "pop": 150000 }, "geometry": { "coordinates": [37.96657799053108, -2.406956589221224], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Voi", "pop": 206543 }, "geometry": { "coordinates": [38.57470740709985, -3.3908440673927345], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Mombasa", "pop": 1234569 }, "geometry": { "coordinates": [39.66018716035529, -4.053152443932618], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Garissa", "pop": 74647 }, "geometry": { "coordinates": [39.64022984341946, -0.4661556615259741], "type": "Point" } }] }


// Map initialization 
var map = L.map('heatmapevent1').setView([-1.28333, 36.81667], 5);

//osm layer
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);


// Add circle marker from Geojson points to map layer 
var populationLayer = L.geoJson(cityPopKenya, {

    // Convert Leaflet markers to circleMarkers
    pointToLayer: function (feature, latlng) {
        //     console.log('Population: ' + feature.properties.pop );
        // console.log('Corrdinates : ' + latlng);
        return L.circleMarker(latlng);
    },

    // Filter every features containing population 
    filter: function (feature) {
        if (feature.properties.pop) {
            return feature;
        }
    },

    // Styling function , colour the circles, 
    // This us similar to passing options to L.circleMarker()
    style: function (feature) {
        return {
            color: '#1f78b4',
            fillColor: '#1f78b4',
            radius: getRadius(feature.properties.pop),
            weight: 1,
            stroke: 1,
            fillOpacity: .8
        }
    }

}).addTo(map);

// Normalize population data to get circle radius in pixel
function getRadius(val) {
    var radius = Math.sqrt(val / 100000);
    return radius * 5;
};

// Event listener
map.on('click', function (event) {
    // Access click coordinates
    console.log('User has clicked at : ', event.latlng);

    // Function to access each circle marker layer 
    // Access each layer corrdinates by invoking eachLayer() method on Geojson layer 
    // These are Leaflet circleMarker objects, extended from the circle object, 
    // so we can obtain their coordinate position using the *circle* object' getLatLng().
    populationLayer.eachLayer(function (layer) {

        // Get coordinate of the centroid for each circle marker
        console.log(layer.getLatLng());


        // Find distance in meters between a layers centroid and click point 
        // store the value in variable and console it 
        var distToClickpoint = event.latlng.distanceTo(layer.getLatLng());
        console.log("Distance between layer and click point : " + distToClickpoint + " meters");

    });
});