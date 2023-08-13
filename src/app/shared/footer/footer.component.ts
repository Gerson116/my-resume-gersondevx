import { Component, Input } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../../assets/css/style.css']
})
export class FooterComponent {
  @Input() perfilUsuario: Usuarios;

  constructor(){
    this.perfilUsuario = new Usuarios();
  }
}
