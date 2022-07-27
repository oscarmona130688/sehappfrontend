import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private api = "http://localhost:3002";
  constructor(private http: HttpClient) { }

  getTodosUsuarios() {
    const path = `${this.api}/usuarios`;
    return this.http.get<Usuarios[]>(path);

  }

  createUsuarios(usuarios: Usuarios) {
    const path = `${this.api}/usuarios`;
    return this.http.post(path, usuarios);

  }

  updateUsuarios(usuarios: Usuarios) {
    const path = `${this.api}/usuarios/${usuarios._id}`;
    return this.http.put<Usuarios>(path, usuarios);

  }

  deleteUsuarios(_id: string) {
    const path = `${this.api}/usuarios/${_id}`;
    return this.http.delete(path);

  }

  getUnoUsuarios(_id: string) {
    const path = `${this.api}/usuarios/${_id}`;
    return this.http.get<Usuarios[]>(path);

  }
}
