/**
 * Eventos de clique nos botoes de menu circulares
 *
 */

$( document ).ready( function() {

    var btnMenuFirst = $( 'button.menu-first' );
    var menuFirst = $( '#n-home.menu-options' );

    // Abrir e fechar primeiro menu
    btnMenuFirst.click( function() {
        if (!menuFirst.is( ':visible' )) {
            menuFirst.slideDown();
        } else {
            menuFirst.slideUp();
        }
    });

    var btnMenuSecond = $( 'button.menu-second' );
    var menuSecond = $( '#n-menu.menu-options' );

    // Abrir e fechar segundo menu
    btnMenuSecond.click( function() {
        if (!menuSecond.is( ':visible' )) {
            menuSecond.slideDown();
        } else {
            menuSecond.slideUp();
        }
    });

    // Fechar segundo menu ao clicar em uma opcao se a tela for menor que 740px
    if ($( window ).width() < 740) {
        $( '#n-menu ul li a' ).click( function(){
            menuSecond.slideUp();
        });
    }
});
