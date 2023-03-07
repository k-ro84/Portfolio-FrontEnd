export class JwtDto {

    token: string;
    type: string;
    email:string;
    nombreUsuario!: string;
    authorities!: string[];
}
