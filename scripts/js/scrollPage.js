/**
 * Rolagem suave entre links e sessoes
 *
 * Link: http://www.codigosnaweb.com/forum/viewtopic.php?t=8934
 */

/**
 * Ao clicar em um link faz a rolagem suavemente ate uma sessao
 *
 * @param {objectHTML} link    link a ser clicado
 * @param {objectHTML} section sessao a ser direcionada
 */
function scrollPage( link, section ) {
    $( document ).ready( function() {
        // Evento de clique em um link
        $( link ).click( function() {
            // Faz animacao nas tags de html e body
            $('html, body').animate({
                // Define o topo da pagina sendo o topo da sessao com delay de 500ms
                scrollTop: $(section).offset().top
            }, 500 );
        });
    });
}

scrollPage( '#link-know' , '#about' );
scrollPage( '#link-about' , '#about' );
scrollPage( '#link-help' , '#help' );
scrollPage( '#link-groups' , '#groups' );
scrollPage( '#link-share' , '#share' );
scrollPage( '#link-galery' , '#galery' )
