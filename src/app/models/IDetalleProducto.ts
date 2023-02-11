import { IEstatus, IVenta } from 'src/app/models';
import { IProducto } from 'src/app/home/productos/models';
import { ISuper } from '.';




export interface IDetalleProducto extends ISuper{

    	  

	  ventaDetalleProducto: IVenta;
	  
	  productoDetalle: IProducto;
	  
	  estatus: IEstatus;
}