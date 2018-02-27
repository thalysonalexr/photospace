/**
 * Eventos na barra de busca
 *
 * Botao para mostrar barra, botao de cancelar e foco na barra
 */

$( document ).ready( function() {

    var search = $( 'input.search' );
    var cancel = $( 'button.cancel-field' );
    var btnSearch = $( 'button.btn-search' );
    var container = $( 'div.field-search' );
    var btnMenu = $( 'button.menu-first' );
    var menu = $( 'nav.menu-options' );

    btnSearch.click( function() {
        menu.hide(100);
        btnMenu.hide(100);
        container.show(100);
        search.focus();
    });

    search.focus( function() {
        search.css({
            'text-align': 'left',
            'color': '#4d4d4d'
        });

        // Seleciona o texto se houver
        if (this.value.length > 0) {
            this.select();
        }
        // Mostra o botao para cancelar edicao
        cancel.show();
    });

    cancel.click( function() {
        search.css({
            'text-align': 'center',
            'color': '#4d4d4d'
        });

        // Esconder o botao de menu e barra em uma janela com largura
        // no maximo de 739 pixels com matchMedia
        // link: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
        if (window.matchMedia('(max-width: 739px)').matches) {
            container.hide(100);
            btnMenu.show(100);
        }

        search.val('');
    });
});
