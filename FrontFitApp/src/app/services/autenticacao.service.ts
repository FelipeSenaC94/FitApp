import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Registrar } from '../models/registrar.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioRegistrado: Registrar[] = [
    { id: 1, email: 'user@example.com', senha: 'password', dataDeCriacao: new Date(), dataDeAlteracao: new Date() },
    // Adicione outros usuários registrados conforme necessário
  ];

  authenticate(email: string, senha: string): Observable<Registrar | undefined> {
    const user = this.usuarioRegistrado.find(u => u.email === email && u.senha === senha);
    return of(user);
  }
}
