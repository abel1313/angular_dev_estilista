import { ISuper } from "src/app/models";




export interface ICarrito extends ISuper{
    producto: string;
    precio: number;
    cantidad: number;

}