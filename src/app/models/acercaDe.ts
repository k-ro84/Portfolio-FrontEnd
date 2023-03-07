export class AcercaDe {
    id?:number;
    nombre:string;
    apellido:string;
    direccion:string;
    descripcion:string;
    imgUser:string;

constructor(nombre:string,apellido:string,direccion:string,descripcion:string,imgUser:string) {
    this.nombre = nombre;
    this.apellido =apellido;
    this.direccion=direccion;
    this.descripcion =descripcion;
    this.imgUser = imgUser;
}


}
