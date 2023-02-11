import { ISuper, ICortePelo } from '.';
import { IVenta } from './IVenta';



export interface IDetalleSinCita extends ISuper{
    subTotal: number;
    
    ventaDetalleSinCita: IVenta;
    
    cortePelo: ICortePelo;

}