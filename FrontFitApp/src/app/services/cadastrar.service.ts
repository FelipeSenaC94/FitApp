import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Registrar } from '../models/registrar.model';

//comunicação com banco

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  private apiUrl = `${environment.ApiUrl}/Usuario`;

  constructor(private http: HttpClient) { }
  GetUsuarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  CreateUsuario(usuario: Registrar): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, usuario).pipe(
      catchError((error) => {
        console.error('Erro na solicitação POST:', error);
        throw error; // Propaga o erro para que outros tratamentos de erro possam lidar com ele
      })
    );
  }
}

