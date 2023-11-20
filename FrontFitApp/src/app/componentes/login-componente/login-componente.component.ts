import { AutenticacaoService } from "./../../services/autenticacao.service";
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registrar } from 'src/app/models/registrar.model';

@Component({
  selector: 'app-login-componente',
  templateUrl: './login-componente.component.html',
  styleUrls: ['./login-componente.component.css']
})

export class LoginComponenteComponent implements OnInit{
  @Output() onSubmit= new EventEmitter<Registrar>();

  loginForm!: FormGroup;
  registrarForm: any;
  AutenticacaoService: any;

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    })
  }
  submit() {
    console.log(this.registrarForm.value);

    this.AutenticacaoService.login(this.registrarForm.value)
      .subscribe(
        (        response: any) => {
          console.log('Autenticação bem-sucedida:', response);
          // Adicione lógica adicional após a autenticação bem-sucedida, se necessário.
        },
        (        error: any) => {
          console.error('Erro durante a autenticação:', error);
          // Adicione lógica para lidar com erros, como exibir uma mensagem de erro para o usuário.
        }
      );
  }

}


