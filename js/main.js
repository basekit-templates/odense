
// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
	$( ".navigation-body, .bk-extendednavigation" ).toggleClass( "open" );
});

// Toggles class open to display/hide folders
$( ".navigation-item.folder" ).each(function() {
	$( this ).click(function() {
		$( this ).toggleClass( "open" );
	});
});
