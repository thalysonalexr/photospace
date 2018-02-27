
$( document ).ready( function(){

	$( 'button#btn-left' ).click( function(){

		var options = $( '.left ul.dropdown' );

		if (!$(options).is( ':visible' )) {
			options.slideDown();
		} else {
			options.slideUp();
		}
		
	});

	$( 'button#btn-right' ).click( function(){

		var options = $( '.right ul.dropdown' );

		if (!$(options).is( ':visible' )) {
			options.slideDown();
		} else {
			options.slideUp();
		}
	});

	$( 'ul.dropdown li a' ).click( function(){

		var menu = $( 'ul.dropdown' );

		menu.slideUp();
	});


});