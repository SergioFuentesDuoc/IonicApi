import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Podemos incorporar todas las páginas que deseamos
import { LoginPage } from './login.page';

const routes: Routes = [
    //Agregamos todas las rutas que queramos
    // como es hijo de otro, se agrega, concatena la otra ruta
    // ej:    /login/conectar
    // ej:    /login/prueba2
    // ej:    /login/prueba3
    { path: 'conectar', component: LoginPage },
    { path: 'prueba2', component: LoginPage },
    { path: 'prueba3', component: LoginPage }
];

@NgModule({
    // Observe que el appRouting tiene RouterModule.forRoot
    // este tiene RouterModule.forChild, o sea es hijo
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
// Nombre de la clase
export class LoginPageRoutingModule { }
