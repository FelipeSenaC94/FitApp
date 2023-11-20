import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponenteComponent } from './componentes/usuario-componente/usuario-componente.component';
import { LoginComponenteComponent } from './componentes/login-componente/login-componente.component';
import { HomeComponent } from './componentes/home/home.component';
const routes: Routes =
[
  { path: 'login', component: LoginComponenteComponent },
  { path: 'cadastro', component: UsuarioComponenteComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
