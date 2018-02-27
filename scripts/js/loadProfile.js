/**
 * Carrega um icone de usuario no perfil de acordo com o sexo
 * e nome do usuario no perfil
 */

const INDEX = 'USERS_PHOTOSPACE';
const LOGGED = 'LOGGED_PHOTOSPACE';


$( document ).ready( function(){

    var user = JSON.parse( sessionStorage.getItem( LOGGED ) );

    $( 'section#user-info h1#name' ).text( user.username );

    var img = user.sex == 'masculino'? 'male.png': 'female.png';

    // Se o usuario contiver uma foto a resgata se nao mostra user icon
    if (user.picture != null)
        $( 'section#photo-perfil img' ).attr( 'src' , user.picture )
    else
        $( 'section#photo-perfil img' ).attr( 'src' , 'assets/img/perfil/' + img );

    // Se o usuario contiver uma biografia entao a resgata
    if (user.bio != null)
        $( 'section#user-info article #bio' ).text( user.bio );

    // Editar biografia
    $( 'button#edit-bio' ).click( function(){

        // Salvar texto atual
        var currentText = $( 'article #bio' ).text();

        // Esconder e mostrar elementos
        $( 'article #bio' ).hide();
        $( 'article button#edit-bio' ).hide();
        // Recuperar o texto do paragrafo
        $( 'textarea#field-bio' ).val( currentText ).show().focus().select();
        $( 'button#save-bio' ).show();
    });

    // Salvar biografia no perfil do usuario
    $( 'button#save-bio' ).click( function(){

        // Pegar nova biografia
        var newBio = $( 'textarea#field-bio' ).val();

        // Esconder e mostrar elementos
        $( 'textarea#field-bio' ).hide();
        $( 'button#save-bio' ).hide();
        // Setar a nova biografia
        $( 'article #bio' ).text( newBio ).show();
        $( 'article button#edit-bio' ).show();

        var userCurrent = JSON.parse( sessionStorage.getItem( LOGGED ) );
        var allUsers = JSON.parse( localStorage.getItem( INDEX ) );

        userCurrent.bio = newBio;

        sessionStorage.setItem( LOGGED , JSON.stringify( userCurrent ) );

        for (var user of allUsers) {
            if (userCurrent.email == user.email) {
                user.bio = newBio;
                break;
            }
        }

        localStorage.setItem( INDEX , JSON.stringify( allUsers ) );
    });

});
