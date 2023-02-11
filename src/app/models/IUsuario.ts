import { ISuper, IRol } from ".";



export interface IUsuario extends ISuper{

    nombreUsuario: string;
    contrasenaUsuario: string;
     listaRoles: Set<IRol>;

}