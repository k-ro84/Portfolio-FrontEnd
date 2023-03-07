export class Historial {

    id?:number;
    empresa:string;
    puesto:string;
    periodo:string;
    actividades:string;
    constructor( empresa: string, puesto: string, periodo: string, actividades: string){
     this.empresa=empresa;
     this.puesto= puesto;
     this.periodo= periodo;
     this.actividades= actividades;

    }

}
