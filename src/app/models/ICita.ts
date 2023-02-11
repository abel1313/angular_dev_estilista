import { ICliente } from './ICliente';
import { IUsuario } from '.';
import { ISuper } from '.';



export interface ICita extends ISuper{
    
    usuarioCita: IUsuario;
    
    clienteCita: ICliente;
    fechaCita: Date;
}