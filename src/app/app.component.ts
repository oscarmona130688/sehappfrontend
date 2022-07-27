import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Servicios Propios', url: '/servicos-propios', icon: 'file-tray-full' },
  ];

  constructor() { }
}
