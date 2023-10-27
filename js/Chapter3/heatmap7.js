// Population Distribution Map With Layer Control

// Group and Classify layers into 3 classes and colour them based on population  
// Create three separate layers based on population  


// Kenyan cities population data , pop
var cityPopKenya = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "city": "Nakuru", "pop": 356777 }, "geometry": { "coordinates": [36.06900776648942, -0.2692405137752445], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Nairobi", "pop": 1008654 }, "geometry": { "coordinates": [36.83440385761696, -1.3009136605425198], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Naivasha", "pop": 250000 }, "geometry": { "coordinates": [36.432857458163056, -0.7116898947238894], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Nyeri", "pop": 600674 }, "geometry": { "coordinates": [36.95718047952491, -0.42591520687876994], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Embu", "pop": 300897 }, "geometry": { "coordinates": [37.46473564510558, -0.5432077389339867], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Machakos", "pop": 567890 }, "geometry": { "coordinates": [37.272957927703885, -1.5238118914734997], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Kericho", "pop": 789600 }, "geometry": { "coordinates": [35.293290462876, -0.37044811708445025], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Eldoret", "pop": 567688 }, "geometry": { "coordinates": [35.276378583016026, 0.5230726184586416], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Kibwezi", "pop": 150000 }, "geometry": { "coordinates": [37.96657799053108, -2.406956589221224], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Voi", "pop": 206543 }, "geometry": { "coordinates": [38.57470740709985, -3.3908440673927345], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Mombasa", "pop": 1234569 }, "geometry": { "coordinates": [39.66018716035529, -4.053152443932618], "type": "Point" } }, { "type": "Feature", "properties": { "city": "Garissa", "pop": 74647 }, "geometry": { "coordinates": [39.64022984341946, -0.4661556615259741], "type": "Point" } }] }


// Map initialization 
var map = L.map('heatmap7').setView([-1.28333, 36.81667], 5);

//osm layer
var CartoDB_VoyagerLabelsUnder = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);


// Apply to all layers 
var commonStyles = {
    weight: 1,
    stroke: 1,
    fillOpacity: .8
}


// Category 1: Lowly populated cities 
var lowPopulation = L.geoJson(cityPopKenya, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, commonStyles);
    },

    // Filter layer with low population
    filter: function (feature) {
        if (feature.properties.pop < 160000) {
            return feature;
        }
    },
    style: function (feature) {
        return {
            color: '#09f56a',
            fillColor: '#09f56a',
            radius: getRadius(feature.properties.pop)
        }
    }
}).addTo(map);


// Category 2:  Highly populated cities 
var highPopulation = L.geoJson(cityPopKenya, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, commonStyles);
    },

    // Filter layer with low population
    filter: function (feature) {
        if (feature.properties.pop < 570000 && 
            feature.properties.pop > 160000) {
            return feature;
        }
    },
    style: function (feature) {
        return {
            color: '#f5ea09',
            fillColor: '#f5ea09',
            radius: getRadius(feature.properties.pop)
        }
    }
}).addTo(map);


// Category 3: Densily populated cities 
var densePopulation = L.geoJson(cityPopKenya, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, commonStyles);
    },

    // Filter layer with low population
    filter: function (feature) {
        if (feature.properties.pop > 570000) {
            console.log(feature);
            return feature;
        }
    },
    style: function (feature) {
        return {
            color: '#f52209',
            fillColor: '#f52209',
            radius: getRadius(feature.properties.pop)
        }
    }
}).addTo(map);


// Normalize population data to get circle radius in pixel
function getRadius(val) {
    var radius = Math.sqrt(val / 100000);
    return radius * 5;
};


// Name object 
// Object to hold names appearing on the layer control 
var sourcesLayers = {
    "Low Population": lowPopulation,
    "Medium": highPopulation,
    "High Density": densePopulation
};

// You can customize the layer control further using html.
var sourcesLayers2 = {
    "<b style='color:#09f56a'>Low Population</b>": lowPopulation,
    "<b style='color:#f5ea09'>Medium</b>": highPopulation,
    "<b style='color:#f52209; text-shadow: 0px 0px 1px #333;'>High Density</b>": densePopulation
}


// Layer control 
L.control.layers(null, 
    sourcesLayers,       // Try sourcesLayers2
    { collapsed:false }
    ).addTo(map);