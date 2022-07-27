import { Injectable } from '@angular/core';
import { Fotos } from '../interfaces/fotos';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private api = "http://localhost:3002";
  constructor(private http: HttpClient) { }

  getTodosFotos() {
    const path = `${this.api}/fotos`;
    return this.http.get<Fotos[]>(path);

  }

  createFotos(fotos: Fotos) {
    const path = `${this.api}/fotos`;
    return this.http.post(path, fotos);

  }

  updateFotos(fotos: Fotos) {
    const path = `${this.api}/fotos/${fotos._id}`;
    return this.http.put<Fotos>(path, fotos);

  }

  deleteFotos(_id: string) {
    const path = `${this.api}/fotos/${_id}`;
    return this.http.delete(path);

  }

  getUnoFotos(_id: string) {
    const path = `${this.api}/fotos/${_id}`;
    return this.http.get<Fotos[]>(path);

  }

  getServicioFotos(servicio: string) {
    const path = `${this.api}/fotosser/${servicio}`;
    return this.http.get<Fotos[]>(path);

  }
}
