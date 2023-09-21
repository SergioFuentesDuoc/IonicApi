import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// agremamos el Routin y LoginPage
import { LoginPageRoutingModule } from './login.routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    //CommonModule,  // No es necesario
    FormsModule,  // Librería para ngModel
    IonicModule,
    LoginPageRoutingModule  // Rutas
  ],
  //  Declaramos la o las Páginas LoginPage
  declarations: [LoginPage]
})
export class LoginPageModule {}