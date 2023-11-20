import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registrar } from 'src/app/models/registrar.model';


@Component({
  selector: 'app-cadastrar-form',
  templateUrl: './cadastrar-form.component.html',
  styleUrls: ['./cadastrar-form.component.css']
})

export class CadastrarFormComponent implements OnInit{
  @Output() onSubmit= new EventEmitter<Registrar>();

  registrarForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registrarForm = new FormGroup({
      id: new FormControl(0),
      email: new FormControl(''),
      senha: new FormControl(''),
      dataDeCriacao: new FormControl(new Date),
      dataDeAlteracao: new FormControl(new Date),
    })
  }
  submit (){
      console.log(this.registrarForm.value);
      this.onSubmit.emit(this.registrarForm.value)
  }

}
