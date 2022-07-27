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
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seresp',
  templateUrl: './seresp.page.html',
  styleUrls: ['./seresp.page.scss'],
})
export class SerespPage implements OnInit {

  _id: string;
  usuarios: Usuarios[] = [];
  servicios: Servicios[] = [];
  comentarios: Comentarios[] = [];
  Fotos: Fotos[] = [];

  constructor(private activateRoute: ActivatedRoute, private usuariosService: UsuariosService,
    private serviciosService: ServiciosService, private fotosService: FotosService,
    private comentariosService: ComentariosService, private alertContrller: AlertController) { }

  ngOnInit() {
    this._id = this.activateRoute.snapshot.paramMap.get("_id");
    console.log(this._id);
    this.getServiciosId();
    this.getCoemnatriosServicio();
  }

  //traer servicios por id
  getServiciosId() {

    this.serviciosService.getUnoServicios(this._id).subscribe(servicios => {
      this.servicios = servicios;
      console.log(this.servicios);
    })

  }

  //traer comentarios segun servicio
  getCoemnatriosServicio() {
    this.comentariosService.getServicioComentarios(this._id).subscribe(comentarios => {
      this.comentarios = comentarios;
      console.log(this.comentarios);
    })
  }

  //alerta parra crear usuarios 
  async openAlert() {
    const alert = await this.alertContrller.create({
      header: 'Comentar',

      inputs: [{
        name: 'descripcion',
        type: 'textarea',
        placeholder: 'Ingrese su comentario'
      },
      {
        name: 'calificacion',
        type: 'number',
        placeholder: 'califica de 1 a 5',
        min: 1,
        max: 5

      }


      ], buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'crear',
          cssClass: 'tertiary',
          handler: (data) => {

            console.log('crear');
            this.createcomentario(data.descripcion, data.calificacion)
          }
        }
      ]
    });
    await alert.present();
  };

  createcomentario(descripcion: string, calificacion: number) {
    const _id = "";
    const servicio = this._id;
    const comentario = {
      _id, descripcion, calificacion, servicio
    }
    this.comentariosService.createComentarios(comentario).subscribe((data) => {
      console.log(data);

    })
  }


}
