import { ISuper } from "./ISuper.mode";




export interface ISesiones extends ISuper{

}

export class Sesiones{
    private sesionUsuario: Storage;
    private sesionCarrito: Storage;
    constructor(){
        this.sesionUsuario = JSON.parse(sessionStorage.getItem('producto') as any);
        this.sesionCarrito = JSON.parse(sessionStorage.getItem('carritoVenta') as any);
    }


    get getSesionUsuario(){
        return this.sesionUsuario;
    }
    get getSesionCarrito(){
        return this.sesionCarrito;
    }
}