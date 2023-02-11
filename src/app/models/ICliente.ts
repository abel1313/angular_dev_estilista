import { ISuper, IPersona, IUsuario } from ".";



export interface ICliente extends ISuper{
    personaCliente: IPersona;
    usuarioSesion: IUsuario;
}