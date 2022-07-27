import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../interfaces/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { Servicios } from '../interfaces/servicios';
import { ServiciosService } from '../services/servicios.service';
import { Fotos } from '../interfaces/fotos';
import { FotosService } from '../services/fotos.service';
import { Comentarios } from '../interfaces/comentarios';
import { ComentariosService } from '../services/comentarios.service';

@Component({
  selector: 'app-sercat',
  templateUrl: './sercat.page.html',
  styleUrls: ['./sercat.page.scss'],
})
export class SercatPage implements OnInit {
  categoria: string;
  usuarios: Usuarios[] = [];
  servicios: Servicios[] = [];
  comentarios: Comentarios[] = [];
  Fotos: Fotos[] = [];
  constructor(private activateRoute: ActivatedRoute, private usuariosService: UsuariosService,
    private serviciosService: ServiciosService, private fotosService: FotosService,
    private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.categoria = this.activateRoute.snapshot.paramMap.get("categoria");
    console.log(this.categoria);
    this.getServiciosCategoria();
  }
  //traer servicios por categoria
  getServiciosCategoria() {

    this.serviciosService.getCategoriaServicios(this.categoria).subscribe(servicios => {
      this.servicios = servicios;
      console.log(this.servicios);
    })

  }

}
