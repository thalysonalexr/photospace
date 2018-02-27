/**
 * Fixa o menu de navegacao e muda a cor do menu social network
 */

$( document ).ready( function() {

    var menu = $( 'section#menu' );
    var links = $( '.social-network a' );
    var height = $( 'section#home' ).height();

    /**
     * Fixa a sessao de MENU apos o fim da sessao HOME
     */
    function fixedMenu() {

        if ($( window ).scrollTop() > height) {
            menu.addClass( 'fixed' ).removeClass( 'absolute' );

            if (links.attr( 'class' ) == 'white')
                links.hide().addClass( 'gray' ).removeClass( 'white' ).fadeIn();

        } else {
            menu.addClass( 'absolute' ).removeClass( 'fixed' );

            if (links.attr( 'class' ) == 'gray')
                links.hide().addClass( 'white' ).removeClass( 'gray' ).fadeIn();
        }
    }

    // Adiciona evento na janela do browser ao rolar a pagina
    $( window ).scroll( function() {
        fixedMenu();
    });

    // Chamada para fixar o menu ao carregar a página
    fixedMenu();
});
