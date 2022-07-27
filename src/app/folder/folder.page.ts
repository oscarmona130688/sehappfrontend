import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Usuarios } from '../interfaces/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { AlertController } from '@ionic/angular';
import { Servicios } from '../interfaces/servicios';
import { ServiciosService } from '../services/servicios.service';
import { Fotos } from '../interfaces/fotos';
import { FotosService } from '../services/fotos.service';
import { Comentarios } from '../interfaces/comentarios';
import { ComentariosService } from '../services/comentarios.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  logs: string[] = [];
  usuarios: Usuarios[] = [];
  servicios: Servicios[] = [];
  comentarios: Comentarios[] = [];
  Fotos: Fotos[] = [];



  constructor(private activatedRoute: ActivatedRoute, private geolocation: Geolocation,
    private usuariosService: UsuariosService, private alertContrller: AlertController,
    private serviciosService: ServiciosService, private fotosService: FotosService,
    private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    //metodos para traer longitud y latitud
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.logs.push("latitud: " + resp.coords.latitude + " ,longitud: " + resp.coords.longitude);
      console.log("la ubicación en gps es: " + this.logs);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude

    });

    //llamar metodo listar todos los usuarios
    this.getTodosUsuarios();
    this.getTodosServicios();

  }

  getTodosUsuarios() {

    this.usuariosService.getTodosUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      var usu = JSON.parse(localStorage.getItem('usuario'));
      console.log(this.usuarios);
      console.log(this.usuarios["usuarios"][0]["nombre"]);
      for (let date of this.usuarios["usuarios"]) {
        if (date.correo == usu.correo) {
          console.log("si entro al if");
          localStorage.setItem('usuario', JSON.stringify(date));
        }
      }


    })


  }

  //traer todos los servicios
  getTodosServicios() {

    this.serviciosService.getTodosServicios().subscribe(servicios => {
      this.servicios = servicios;
      console.log(this.servicios);
    })

  }


  //alerta parra crear usuarios 
  async openAlert() {
    const alert = await this.alertContrller.create({
      header: 'Registrarse',

      inputs: [{
        name: 'nombre',
        type: 'text',
        placeholder: 'Ingrese Nombre'
      },
      {
        name: 'correo',
        type: 'text',
        placeholder: 'Ingrese correo'
      },
      {
        name: 'contrasena',
        type: 'text',
        placeholder: 'Ingrese contraseña'
      },
      {
        name: 'telefono',
        type: 'number',
        placeholder: 'Ingrese telefono'
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
            this.createUsuario(data.nombre, data.correo, data.contrasena, data.telefono)
          }
        }
      ]
    });
    await alert.present();
  };

  createUsuario(nombre: string, correo: string, contrasena: string, telefono: number) {
    const _id = "";
    const usuario = {
      _id, nombre, correo, contrasena, telefono
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuariosService.createUsuarios(usuario).subscribe((data) => {
      console.log(data);
      this.getTodosUsuarios();
    })
  }
}
