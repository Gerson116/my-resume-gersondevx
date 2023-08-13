import { Component } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { Experiencia } from 'src/app/models/experiencia';
import { Habilidades } from 'src/app/models/habilidades';
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
  perfilUsuario: Usuarios;
  educacion: Educacion[];
  plataformas: PlataformasUtilizadasPorLosUsuarios[];
  habilidades: Habilidades[];
  experiencia: Array<Experiencia>;

  constructor(private usuarioServices: UsuarioService){
    //...
    this.usuario = new Array<Usuarios>();
    this.perfilUsuario = new Usuarios();
    this.educacion = new Array<Educacion>();
    this.habilidades = Array<Habilidades>();
    this.plataformas = new Array<PlataformasUtilizadasPorLosUsuarios>();
    this.experiencia = new Array<Experiencia>();
  }

  ngOnInit(){
    this.buscarUsuario();
    this.redesSocialesYRepositorio();
    this.buscarExperienciasLaborales();
    this.buscarLasHabilidadesTecnicas();
    this.buscarLasExperiencias();
  }

  async buscarUsuario(){
    //...
    let usuarioServices = await this.usuarioServices.buscarUsuario();
    this.usuario = usuarioServices.data;
    this.perfilUsuario = this.usuario[0];
  }

  async redesSocialesYRepositorio(){
    let redesSocialesYRepositorio = await this.usuarioServices.redesSocialesYRepositorio();
    this.plataformas = redesSocialesYRepositorio.data;
  }

  async buscarExperienciasLaborales(){
    let estudiantesServices = await this.usuarioServices.buscarExperienciasLaborales();
    this.educacion = estudiantesServices.data;
  }

  async buscarLasHabilidadesTecnicas(){
    let habilidadesServices = await this.usuarioServices.buscarLasHabilidadesTecnicas();
    this.habilidades = habilidadesServices.data;
  }

  async buscarLasExperiencias(){
    let experienciaServices = await this.usuarioServices.buscarLasExperiencias();
    this.experiencia = experienciaServices.data;
  }

  calcularEdad(fechaDeNacimiento: Date): number{
    let fechaActual = new Date();
    return fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();
  }

}
