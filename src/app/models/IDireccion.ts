import { ISuper } from "./ISuper.mode";




export interface IDireccion extends ISuper{

    estadoDireccion: string;
    municipioDireccion: string;
    calleDireccion: string;
    coloniaDireccion: string;
}