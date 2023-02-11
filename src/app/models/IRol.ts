import { ISuper, IUsuario } from ".";





export interface IRol extends ISuper{
    
    nombreRol: string;
    usuarioRol: IUsuario;
}