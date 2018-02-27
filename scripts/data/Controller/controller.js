/**
 * Faz todas as operacoes nos aquivos do localstorage
 * Insere, recupera, atualiza e deleta
 *
 * JSON.parse()   link: https://www.w3schools.com/js/js_json_parse.asp
 * JSON.stringify link: https://www.w3schools.com/js/js_json_stringify.asp
 *
 * @author Thalyson Alexandre Rodrigues de sousa <http://github.com/thalysonrodrigues>
 */

const INDEX = 'USERS_PHOTOSPACE';
const LOGGED = 'LOGGED_PHOTOSPACE';

/**
 * Inicializar localStorage com array vazio em formato JSON
 * para recuperacao posteriormente
 *
 */
let initialize = function() {
    if ( ! localStorage.getItem( INDEX ))
        localStorage.setItem( INDEX , JSON.stringify( [] ) );
}

/**
 * Registra um novo usuario em localStorage
 */
registerNewUser = function() {

    initialize();
    // Pegar os valores nos inputs
    let fname = $( 'input#fname' ).val();
    let lname = $( 'input#lname' ).val();
    let email = $( 'input#email' ).val();
    let username = $( 'input#username' ).val();
    let sex = $('input[name="sex"]:checked').val();
    let password = $( 'input#password' ).val();
    let confirm = $( 'input#confirm' ).val();

    // Converter arquivo de formato JSON para objeto recuperando todos
    // os usuarios descritos no arquivo
    var allUsers = JSON.parse( localStorage.getItem( INDEX ) );

    // Verifica se email já está cadastrado e emite alerta de erro caso esteja
    for (var user of allUsers) {
        if (user.email == email) {
            $( 'input#email' ).css({'border': '1px solid #dd2323','background-color': '#ff7f7f'}).val('').focus();
            alert('E-mail já cadastrado!');
            return;
        }
    }

    // Verifica se a senha e a confirmacao de senha sao diferente e emite alerta
    if (password !== confirm) {
        $( 'input#password' ).css({'border': '1px solid #dd2323','background-color': '#ff7f7f'});
        $( 'input#confirm' ).css({'border': '1px solid #dd2323','background-color': '#ff7f7f'}).val('').focus();
        alert('As senhas não coincidem');
        return;
    }

    // Cria um novo usuario
    var user = new User( fname, lname, email, username, sex, password );
    // Adiciona um novo usuario ao array recuperado
    allUsers.push( user );
    // Seta novamente o array no arquivo com formato JSON
    localStorage.setItem( INDEX , JSON.stringify( allUsers ) );
    // Seta o ultimo usuario logado (o que acabou de abrir conta)
    sessionStorage.setItem( LOGGED , JSON.stringify( user ) );
    // Redireciona para página do perfil de usuario
    $( location ).attr( 'href' , 'profile.html' );
};


/**
 * Faz login de usuario no site
 */
login = function() {

    initialize();
    // Pegar os valores dos inputs
    let email = $( 'input#email' ).val();
    let password = $( 'input#password' ).val();

    // Verifica se o usuário está cadastrado por email e senha
    for (user of JSON.parse(localStorage.getItem( INDEX ))) {
        if (user.email == email && user.password == password) {
            // Seta o ultimo usuario logado e redireciona para o perfil
            sessionStorage.setItem( LOGGED , JSON.stringify( user ) );
            $( location ).attr( 'href' , 'profile.html' );
            return;
        }
    }
    // Mostra alerta de erro de login
    $( 'input#email' ).css({'border': '1px solid #dd2323','background-color': '#ff7f7f'}).focus();
    $( 'input#password' ).css({'border': '1px solid #dd2323','background-color': '#ff7f7f'});

    alert('E-mail ou senha incorretos');
}

/**
 * Retorna as informacoes do usuario atual em inputs
 */
getInfo = function() {

    var current = JSON.parse( sessionStorage.getItem( LOGGED ) );

    $( 'input#fname' ).val( current.fname );
    $( 'input#lname' ).val( current.lname );
    $( 'input#email' ).val( current.email );
    $( 'input#username' ).val( current.username );
    current.sex == 'masculino'? $( 'input#male' ).prop('checked', true): $( 'input#female' ).prop('checked', true);
    $( 'input#password' ).val( current.password );
}

/**
 * Atualiza as informacoes do usuario atual no cadastro de usuarios
 */
updateInfo = function() {

    initialize();

    // Pegar os valores nos inputs
    let fname = $( 'input#fname' ).val();
    let lname = $( 'input#lname' ).val();
    let email = $( 'input#email' ).val();
    let username = $( 'input#username' ).val();
    let sex = $('input[name="sex"]:checked').val();
    let password = $( 'input#password' ).val();
    let picture = 'assets/img/perfil/' + $( 'input#ipt-load' ).val().split( '\\' )[2];

    var allUsers = JSON.parse( localStorage.getItem( INDEX ) );
    var current = JSON.parse( sessionStorage.getItem( LOGGED ) );

    for (user in allUsers) {

        // Encontra o usuario logado em todos os usuarios cadastrados
        if (current.email == allUsers[user].email) {

            // Atualiza as informacoes do usuario no cadastro
            allUsers[user].fname = fname;
            allUsers[user].lname = lname;
            allUsers[user].email = email;
            allUsers[user].username = username;
            allUsers[user].sex = sex;
            allUsers[user].password = password;
            allUsers[user].picture = picture;

            // Atualiza as informacoes do usuario atual
            current = allUsers[user];

            // Guarda as informacoes alteradas
            sessionStorage.setItem( LOGGED , JSON.stringify( current ) );
            localStorage.setItem( INDEX , JSON.stringify( allUsers ) );
            $( location ).attr( 'href' , 'profile.html' );
            return;
        }
    }
}
