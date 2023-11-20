import { CadastrarService } from "./../../services/cadastrar.service";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Registrar } from 'src/app/models/registrar.model';
import { CadastrarFormComponent } from "src/app/formularios/cadastrar-form/cadastrar-form.component";

@Component({
  selector: 'app-usuario-componente',
  templateUrl: './usuario-componente.component.html',
  styleUrls: ['./usuario-componente.component.css']
})
export class UsuarioComponenteComponent {
  constructor(private CadastrarService : CadastrarService, private router: Router) {


  }

  createUsuario(usuario: Registrar) {
    this.CadastrarService.CreateUsuario(usuario).subscribe((data) => { });
  }
}
