/**
 * Carregar foto do perfil a partir do dir ./assets/img/perfil
 *
 */

$( document ).ready( function() {
    var user = JSON.parse( sessionStorage.getItem( LOGGED ) );

    var img = user.sex == 'masculino'? 'male.png': 'female.png';

    // Se o usuario contiver uma foto a resgata se nao mostra user icon
    if (user.picture != null)
        $( '#photo-perfil' ).attr( 'src' , user.picture )
    else
        $( '#photo-perfil' ).attr( 'src' , 'assets/img/perfil/' + img );

    // Carregar imagem a partir do computador
    $( 'input#ipt-load' ).change( function() {

        var path = 'assets/img/perfil/';
        // Carrega a imagem na figure
        path += $( 'input#ipt-load' ).val().split( '\\' )[2];
        $( 'img#photo-perfil' ).attr( 'src' , path );
    });
});
