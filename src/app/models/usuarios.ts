
export class Usuarios{
  id: number;
  nombres: string;
  apellidos: string;
  fechaDeNacimiento: Date;
  celular: string;
  pais: string;
  ciudad: string;
  acercaDeMi: string;

  constructor(){
    this.id = 0;
    this.nombres = '';
    this.apellidos = '';
    this.fechaDeNacimiento = new Date();
    this.celular = '';
    this.pais = '';
    this.ciudad = '';
    this.acercaDeMi = '';
  }
}
