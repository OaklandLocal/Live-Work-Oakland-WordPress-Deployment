(function($) {
    $(document).ready(function() {
        $('.google-map').each( function() {
            var mapDiv = $(this);
            var mapData = window[mapDiv.attr('id')];

            if( undefined !== mapData.address ) {
                // lookup address
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode( { 'address': mapData.address}, function(results, status) {
                    if(status == google.maps.GeocoderStatus.OK) {
                        createMap( results[0].geometry.location );
                    }
                    else {
                        alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            }
            else if( undefined !== mapData.lat && undefined !== mapData.lng ) {
                createMap( new google.maps.LatLng(mapData.lat, mapData.lng) );
            }

            function createMap( position ) {
                var map;

                var style = [{
                    "stylers": [{
                        "visibility": "off"
                    }]
                },{
                    "featureType": "road",
                        "stylers": [{
                        "visibility": "on"
                    },{
                        "color": "#ffffff"
                    }]
                },{
                    "featureType": "road.arterial",
                        "stylers": [{
                        "visibility": "on"
                    },{
                        "color": "#f1c40f"
                    }]
                },{
                    "featureType": "road.highway",
                        "stylers": [{
                        "visibility": "on"
                    },{
                        "color": "#f1c40f"
                    }]
                },{
                    "featureType": "landscape",
                        "stylers": [{
                        "visibility": "on"
                    },{
                        "color": "#ecf0f1"
                    }]
                },{
                    "featureType": "water",
                        "stylers": [{
                        "visibility": "on"
                    },{
                        "color": "#73bfc1"
                    }]
                },{},{
                    "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{
                        "visibility": "off"
                    }]
                },{
                    "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [{
                        "visibility": "on"
                    },{
                        "color": "#2ecc71"
                    }]
                },{
                    "elementType": "labels",
                        "stylers": [{
                        "visibility": "off"
                    }]
                },{
                    "featureType": "landscape.man_made",
                        "elementType": "geometry",
                        "stylers": [{
                        "weight": 0.9
                    },{
                        "visibility": "off"
                    }]
                }];

                var options = {
                    zoom: parseInt( mapData.mapZoom, 10 ),
                    center: position,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId[mapData.mapType]
                };

                map = new google.maps.Map(mapDiv[0], options);

                if( mapData.mapStyle === 'flat' ) {
                    map.setOptions({
                        styles: style
                    });
                }

                if( mapData.marker === 'show' ) {
                    var image = {
                        url: mapData.markerURL,
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(18, 51)
                    };
                    var marker = new google.maps.Marker({
                        position: position,
                        map: map,
                        icon: image
                    });
                }
            }
        });
    });

})(jQuery);