$( document ).ready( function() {

	validateField( $('fieldset#user-login') );

	// Evento de clique no botao para LOGIN
    $( 'input#login' ).click( function() {
        login();
    });

});