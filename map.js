var DEFAULT_MAP_OPTIONS = {
    center: new google.maps.LatLng(40, -99), // Center of US
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.SATELLITE
};

function renderMap() {
    return new google.maps.Map(
        $('#map-canvas').get(0),
        DEFAULT_MAP_OPTIONS
    );
}

$(document).ready(function() {
    renderMap();
});