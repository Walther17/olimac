import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import {environment} from '../../../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(environment.url_api);
  }

  createUsuario(usuario:Usuario): Observable<Object>{
    return this.httpClient.post(`${environment.url_api}`, usuario);
  }

  deleteUsuario(id:number,  usuario:Usuario): Observable<Object>{
    return  this.httpClient.put(`${environment.url_api}/${id}`, usuario);
  }

  getUsuarioById(id:number): Observable<Object>{
    return  this.httpClient.get(`${environment.url_api}/${id}`);
  }

  updateUsuario(id:number,  usuario:Usuario): Observable<Object>{
    return  this.httpClient.put(`${environment.url_api}/${id}`, usuario);
  }
  
}
