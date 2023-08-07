import { Component } from '@angular/core';
import { PlataformasUtilizadasPorLosUsuarios } from 'src/app/models/plataformas-utilizadas-por-los-usuarios';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/style.css']
})
export class HomeComponent {

  usuario: Usuarios[];
  plataformas: PlataformasUtilizadasPorLosUsuarios[];

  constructor(private usuarioServices: UsuarioService){
    //...
    this.usuario = new Array<Usuarios>();
    this.plataformas = new Array<PlataformasUtilizadasPorLosUsuarios>();
  }

  ngOnInit(){
    this.buscarUsuario();
    this.redesSocialesYRepositorio();
  }

  async buscarUsuario(){
    //...
    let usuarioServices = await this.usuarioServices.buscarUsuario();
    this.usuario = usuarioServices.data;
    console.log(this.usuario);
  }

  async redesSocialesYRepositorio(){
    let redesSocialesYRepositorio = await this.usuarioServices.redesSocialesYRepositorio();
    this.plataformas = redesSocialesYRepositorio.data;
  }

  calcularEdad(fechaDeNacimiento: Date): number{
    let fechaActual = new Date();
    return fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();
  }

}
