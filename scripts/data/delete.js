

$( document ).ready( function(){

    // Mostrar janela de confirmacao
    $( 'button#delete-user' ).click( function() {

        $( 'div.modal-confirm' ).show(200).focus();

    });

    // Esconder janela de confirmacao
    $( '.modal-confirm button#cancel' ).click( function() {

        $( 'div.modal-confirm' ).hide(200);

    });

    // Confirmar exclusao
    $( '.modal-confirm button#confirm' ).click( function() {

        deleteUser();

    });

});
