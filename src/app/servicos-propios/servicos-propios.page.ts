import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { AlertController } from '@ionic/angular';
import { Servicios } from '../interfaces/servicios';
import { ServiciosService } from '../services/servicios.service';
import { Fotos } from '../interfaces/fotos';
import { FotosService } from '../services/fotos.service';
import { Comentarios } from '../interfaces/comentarios';
import { ComentariosService } from '../services/comentarios.service';

@Component({
  selector: 'app-servicos-propios',
  templateUrl: './servicos-propios.page.html',
  styleUrls: ['./servicos-propios.page.scss'],

})
export class ServicosPropiosPage implements OnInit {
  servicios: Servicios[] = [];

  constructor(private usuariosService: UsuariosService, private alertContrller: AlertController,
    private serviciosService: ServiciosService, private fotosService: FotosService,
    private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.listarServiciosUsuario();
  }

  listarServiciosUsuario() {
    var usuarios = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuarios._id);

    this.serviciosService.getUsuarioServicios(usuarios._id).subscribe(servicios => {
      this.servicios = servicios;
      console.log(this.servicios);
    })



  }

  //alerta parra crear servicios 
  async openAlert() {
    const alert = await this.alertContrller.create({
      header: 'Crear Servicio',

      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Ingrese tirulo'
      },
      {
        name: 'descripcion',
        type: 'textarea',
        placeholder: 'Ingrese descripcion'
      },
      {
        name: 'categoria',
        type: 'text',
        placeholder: 'Ingrese categoria'
      },
      {
        name: 'ciudad',
        type: 'text',
        placeholder: 'Ingrese ciudad '
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
            this.createServicio(data.titulo, data.descripcion, data.categoria, data.ciudad)
          }
        }
      ]
    });
    await alert.present();
  };

  createServicio(titulo: string, descripcion: string, categoria: string, ciudad: string) {
    const _id = "";
    var usuarios = JSON.parse(localStorage.getItem('usuario'));
    var usuario = usuarios._id;
    const usua = {
      _id, titulo, descripcion, categoria, ciudad, usuario
    }

    this.serviciosService.createServicios(usua).subscribe((data) => {
      console.log(data);

    })
  }



  eliminarServicio(_id: string) {

    this.serviciosService.deleteServicios(_id).subscribe((data) => {
      console.log(data);
      this.presentAlert();

    })
  }

  async presentAlert() {
    const alert = await this.alertContrller.create({
      header: 'Alerta!',

      message: 'El servicio ha sido eliminado!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
