import { IEstatus } from "src/app/models";
import { ISuper } from "src/app/models/ISuper.mode";
import { ITamanioProducto } from "./ITamanioProducto.model";


export interface IProducto extends ISuper{


    nombreProducto: string;
    tamanoProducto: ITamanioProducto;
    estatusPieza: IEstatus;

}



export class Producto implements ISuper{

    static iniciarProducto(): IProducto{
        return {
            id:0,
            nombreProducto:'',
            estatusPieza:{
                id:0,
                activo:0
            },
            tamanoProducto:{
                id:0,
                tipoPieza: '',
                precioPieza: 0
            }
        }
    }

}