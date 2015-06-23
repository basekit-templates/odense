
// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
	$( ".navigation-body, .template-nav, .basket-toggle, .navigation-toggle" ).toggleClass( "open" );
});

 // Toggles class open to display/hide folders
$( ".navigation-item.folder .item-name--parent" ).each(function() {
	$( this ).click(function() {
		$( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
	});
});

/*
$('.basket-body').click(function(e) {
    if (e.target == this) { 
    	$("#page-zones__template-widgets__ecombasket-shopbasket").removeClass("show-content");
    }
});*/


$( ".ecombasket__basket-toggle" ).click(function() {
	$( "body" ).toggleClass( "basket-open" );
});


$('.basket-body').click(function(e) {
	if (e.target == this) {
	$( "body" ).removeClass( "basket-open" );
	}
});
