import { Component } from '@angular/core';

@Component({
    // Nombre que podemos utilizar en otro Html
    selector: 'app-login',
    // Agregamos el Html
    templateUrl: './login.page.html', 
    //styleUrls: ['./folder.page.scss'], <== No tenemos
})
export class LoginPage {
    // Creamos las variables del Html
    txEmail: String = ""
    txPassword: String = ""
    constructor() { }
    // Creamos los métodos vacios del Html
    loginUser() { }
    goToSignup() { }
    goToResetPassword() { }
}
