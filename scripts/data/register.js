$( document ).ready( function() {

	validateField( $('fieldset#user-register') );

	// Evento de clique no botao para CADASTRO DE USUARIO
    $( 'input#register' ).click( function() {
        if (validateAll( $('fieldset#user-register') )) {
            registerNewUser();
        }
    });
    
});