/**
 * Classe modelo de usuario do website Photospace
 *
 * @author Thalyson Alexandre Rodrigues de Sousa <http://github.com/thalysonrodrigues/>
 */
class User {
    /**
     * Construtor da classe de usuário
     *
     * @constructor
     *
     * @param {string} fname      Primeiro nome do usuario
     * @param {string} lname      Sobrenome do usuario
     * @param {string} email      Email de contato
     * @param {string} username   Nome de usuario
     * @param {string} sex        sexo (masculino ou feminino)
     * @param {string} password   Senha de cadastro
     * @param {string} picture    Foto de perfil do usuario
     * @param {string} bio        Biografia do usuario
     */
    constructor( fname=null, lname=null, email=null, username=null, sex=null, password=null, picture=null, bio=null ) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.username = username;
        this.sex = sex;
        this.password = password;
        this.picture = picture;
        this.bio = bio;
    }
}
