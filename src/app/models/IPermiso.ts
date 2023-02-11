import { IMenu } from './IMenu';
import { IRol } from '.';
import { IRuta } from './IRuta';
import { ISuper } from '.';




export interface IPermiso extends ISuper{

    ruta: IRuta;
    menuPermiso: IMenu;
    rol: IRol;
}