export class Persona {
    id?:number;
    nombre:string;
    apellido:string;
    direccion:string;
    descripcion:string;
    fotoURL:string;
constructor(nombre:string,apellido:string,direccion:string,descripcion:string,fotoURL:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.descripcion = descripcion;
    this.fotoURL= fotoURL;
}

}