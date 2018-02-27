/**
 * Troca as imagens de fundo da sessao HOME automaticamente
 *
 * setInterval
 * link: https://www.w3schools.com/jsref/met_win_setinterval.asp
 */

// Array que contem o nome das imagens de fundo a serem trocadas
$( document ).ready( function() {

    var images = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.jpg',
        'background5.jpg',
        'background6.jpg',
        'background7.jpg',
        'background8.jpg',
        'background9.jpg',
        'background10.jpg',
        'background11.jpg'
    ];

    var index = 0;
    var maxImages = images.length - 1;

    // Faz a troca do plano de fundo a cada 3 segundos
    var timer = setInterval( function() {
        var curImage = images[index];
        index = ( index == maxImages ) ? 0 : ++index;
        $( 'section#home' ).css( 'background-image' , `url(assets/img/${curImage})` );
    }, 3000 );

});
