(function() {
	
	GeoMashup.addAction( 'colorIcon', function( properties, icon, color_name ) {
		// For single category icons use the Geo Mashup color icon names, 
		// but the 24x24 ones in the custom image directory
		icon.image = properties.custom_url_path + '/images/' + color_name + '.png';
		icon.iconShadow = '';
		icon.iconSize = [ 32, 37 ];
		icon.iconAnchor = [ 12, 24 ];
		icon.iconInfoWindowAnchor = [ 12, 1 ];
	} );

	
	GeoMashup.addAction( 'multiObjectMarker', function( properties, marker ) {
	
		// When there is more than one marker assigned to the same location - mm_20_plus.png
		marker.setIcon( properties.custom_url_path + '/images/multi.png' );

	} );


	GeoMashup.addAction( 'loadedMap', function( properties, map ) { 
	var google_map = map.getMap(); 
	 var custom_styles = [ 
	{ 
	featureType: "administrative", 
	 elementType: "all", 
	stylers: [ { visibility: "off" }, { saturation: -100 } ] 
	},{ 

	 featureType: "landscape", 
	elementType: "all", 
	stylers: [ { visibility: "off" }, { saturation: -100 } ] 
	 },{ 
	featureType: "poi", 
	elementType: "all", 
	 stylers: [ { visibility: "off" }, { saturation: -100 } ] 
	},{ 

	featureType: "road", 
	 elementType: "all", 
	stylers: [ { visibility: "simplified" }, { saturation: -100 } ] 
	},{ 

	featureType: "road", 
	 elementType: "labels", 
	stylers: [ {visibility: "on" }, { hue: "#00ffe6" } ] 
	},{ 
	
	 featureType: "transit", 
	elementType: "all", 
	stylers: [ { visibility: "on" }, { saturation: -100 } ] 
	 },{ 
	featureType: "water", 
	elementType: "all", 
	 stylers: [ { visibility: "simplified" }, { hue: "#00ffe6" } ] 
	} 

	]; 
	 var map_type = new google.maps.StyledMapType( custom_styles, { name: 'rsf' 
	} ); 

	google_map.mapTypes.set( 'grey', map_type ); 
	 google_map.setMapTypeId( 'grey' ); 
	} ); 

}());
