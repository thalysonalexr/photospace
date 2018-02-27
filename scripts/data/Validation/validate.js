/**
 * Validar formulário
 *
 * @author Thalyson Alexandre Rodrigues de Sousa <http://github.com/thalysonrodrigues/>
 */


/**
 * Mostrar se o campo esta valido
 * cores vermelhas campo vazio
 * cores verdes campo preenchido
 *
 * @param   {object}  element  Input do form a ser validado
 * @returns {boolean}          Verdadeiro se elemento validado
 */
let showValidate = function( element ) {
    if ($( element ).val() == '') {
        $( element ).css({
            'border': '1px solid #dd2323',
            'background-color': '#ff7f7f',
            'color': '#59030d'
        });
        return false;
    }
    $( element ).css({
        'border': '1px solid #24e290',
        'background-color': '#94efc8',
        'color': '#08542a'
    });
    return true;
}

/**
 * Adiciona para cada campo de formulario
 * o evento de focusout com funcao showValidate
 *
 * @param {object} form formulario a ter os campos validados
 */
let validateField = function( form ) {
    form.children().each( function( index , element ) {
        if ($( element ).attr('type')) {
            $( element ).focusout( function(){
                showValidate( element );
            });
        }
    });
}

/**
 * Valida todos os inputs de formulario
 *
 * @param {object} form formulario a ter os campos validados
 */
let validateAll = function( form ) {
    var validated = true;
    form.children().each( function( index , element ) {
        if ($( element ).attr('type')) {
            if (!showValidate( element ))
                validated = false;
        }
    });
    return validated;
}
