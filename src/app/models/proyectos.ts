export class Proyectos {
    id?:number;
    tituloProyecto:string;
    descripcion:string;
     url:string;

     constructor(tituloProyecto:string,descripcion:string,url:string) {
      this.tituloProyecto=tituloProyecto;
      this.descripcion=descripcion;
      this.url=url;
     }
}





