import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentarios } from '../interfaces/comentarios';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private api = "http://localhost:3002";
  constructor(private http: HttpClient) { }

  getTodosComentarios() {
    const path = `${this.api}/comentarios`;
    return this.http.get<Comentarios[]>(path);

  }

  createComentarios(comentarios: Comentarios) {
    const path = `${this.api}/comentarios`;
    return this.http.post(path, comentarios);

  }

  updateComentarios(comentarios: Comentarios) {
    const path = `${this.api}/comentarios/${comentarios._id}`;
    return this.http.put<Comentarios>(path, comentarios);

  }

  deleteComentarios(_id: string) {
    const path = `${this.api}/comentarios/${_id}`;
    return this.http.delete(path);

  }

  getUnoComentarios(_id: string) {
    const path = `${this.api}/comentarios/${_id}`;
    return this.http.get<Comentarios[]>(path);

  }

  getServicioComentarios(servicio: string) {
    const path = `${this.api}/comentariosser/${servicio}`;
    return this.http.get<Comentarios[]>(path);

  }
}
