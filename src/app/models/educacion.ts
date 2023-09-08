
export class Educacion{
  id: number;
  usuarioId: number;
  startYear: string;
  endYear: string;
  present: boolean;
  title: string;
  detalle: string;
  institucion: string;

  constructor(){
    this.id = 0;
    this.usuarioId = 0;
    this.startYear = '';
    this.endYear = '';
    this.present = false;
    this.title = '';
    this.detalle = '';
    this.institucion = '';

  }
}
