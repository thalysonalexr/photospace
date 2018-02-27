$( document ).ready( function() {

	getInfo();

	validateField( $('fieldset#user-update') );

	$( 'input#update' ).click( function() {
		if (validateAll( $('fieldset#user-update') )) {
            updateInfo();
            alert('Informações atualizadas com sucesso.');
        }
	});
});