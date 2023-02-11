import { ICita } from './ICita';
import { IVenta } from './IVenta';
import { ISuper } from '.';





export interface IDetalleCorteCita extends ISuper{
    
	  
	  subTotalDetalleCorteCita: number;
	  ventaDetalleCorteCita: IVenta;
	  citaDetalleCorteCita: ICita;
}