import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponenteComponent } from './componentes/login-componente/login-componente.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CadastrarFormComponent  } from './formularios/cadastrar-form/cadastrar-form.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { UsuarioComponenteComponent } from "./componentes/usuario-componente/usuario-componente.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponenteComponent,
    HomeComponent,
    FooterComponent,
    CadastrarFormComponent,
    NavbarComponent,
    UsuarioComponenteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
