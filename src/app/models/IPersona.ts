import { IDireccion, ISuper } from ".";




export interface IPersona extends ISuper{

    nombrePersona: string;
    apeidoPaternoPersona: string;
    apeidoMaternoPersona: string;
    sexo: string;
    fechaNacimientoPersona: string;
    numeroTelefonoPersona: string;
    direccionPersona: IDireccion;
    

}