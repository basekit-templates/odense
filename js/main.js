
// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
	$( ".navigation-body, .bk-extendednavigation, .template-nav" ).toggleClass( "open" );
});

 // Toggles class open to display/hide folders
$( ".navigation-item.folder .item-name--parent" ).each(function() {
	$( this ).click(function() {
		$( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
	});
});

// Closes shopping basket modal when clicking on the outer overlay
$('.basket-body').click(function(e) {
    if (e.target == this) { 
    	$("#page-zones__template-widgets__ecombasket-shopbasket").removeClass("show-content");
    }
});
