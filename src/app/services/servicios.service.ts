import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../interfaces/servicios';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private api = "http://localhost:3002";
  constructor(private http: HttpClient) { }

  getTodosServicios() {
    const path = `${this.api}/servicios`;
    return this.http.get<Servicios[]>(path);

  }

  createServicios(servicios: Servicios) {
    const path = `${this.api}/servicios`;
    return this.http.post(path, servicios);

  }

  updateServicios(servicios: Servicios) {
    const path = `${this.api}/servicios/${servicios._id}`;
    return this.http.put<Servicios>(path, servicios);

  }

  deleteServicios(_id: string) {
    const path = `${this.api}/servicios/${_id}`;
    return this.http.delete(path);

  }

  getUnoServicios(_id: string) {
    const path = `${this.api}/servicios/${_id}`;
    return this.http.get<Servicios[]>(path);

  }

  getUsuarioServicios(usuario: string) {
    const path = `${this.api}/serviciosusu/${usuario}`;
    return this.http.get<Servicios[]>(path);

  }

  getCategoriaServicios(categoria: string) {
    const path = `${this.api}/servicioscat/${categoria}`;
    return this.http.get<Servicios[]>(path);

  }

  getCiudadServicios(ciudad: string) {
    const path = `${this.api}/serviciosciu/${ciudad}`;
    return this.http.get<Servicios[]>(path);

  }
}
