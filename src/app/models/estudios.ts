export class Estudios {

    id?:number;
    institucion:string;
    periodo: string;
    detalles:string;
    estado:string;
    tituloEduc:string;
    imagEstud:string;

    constructor(institucion:string,periodo:string,detalles:string,estado:string,tituloEduc:string,imagEstud:string){
        
        this.institucion= institucion;
        this.periodo= periodo;
        this.detalles= detalles;
        this.estado= estado;
        this.tituloEduc=tituloEduc;
        this.imagEstud= imagEstud;
    }

}
