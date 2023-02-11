import { ICarrito } from "../home/carrito/models";
import { IEstatus, ISuper, IVenta } from "../models";





export interface IDetalleVentaDto extends ISuper{
    subTotal: number;
    ventaDetalleProducto: IVenta;
    carrito: Array<ICarrito>;
    estatus: IEstatus;
}

export class DetalleVentaDto{
    id: number;
    subTotal: number;
    ventaDetalleProducto: IVenta;
    carrito: Array<ICarrito>;
    estatus: IEstatus;
     constructor(){
        this.id = 0;
        this.subTotal = 0;
        this.carrito = [],
        this.estatus = {
            id: 0,
            activo: 0
        }

        this.ventaDetalleProducto ={
            id: 0,
            totalVenta:0,
            fechaVenta: '',
            usuarioVenta:{
                id: 0,
                contrasenaUsuario: '',
                nombreUsuario: '',
                listaRoles: new Set()
            },
            clienteVenta:{
                id:0,
                personaCliente:{
                    id: 0,
                    apeidoMaternoPersona: '',
                    apeidoPaternoPersona: '',
                    direccionPersona: {
                        id:0,
                        calleDireccion: '',
                        coloniaDireccion: '',
                        estadoDireccion: '',
                        municipioDireccion: '',
                    },
                    fechaNacimientoPersona: '',
                    nombrePersona: '',
                    numeroTelefonoPersona: '',
                    sexo: ''
                },
                usuarioSesion:{
                    id: 0,
                    nombreUsuario: '',
                    contrasenaUsuario: '',
                    listaRoles: new Set()
                }
            }
        }

    }


    // set setId(id: number){
    //     this.id = id;
    // }
    // get getId(){
    //    return this.id;
    // }

    // set setVentaDetalleProducto(ventaDetalleProducto: IVenta){
    //     this.ventaDetalleProducto = ventaDetalleProducto;
    // }
    // get getVentaDetalleProducto(){
    //    return this.ventaDetalleProducto;
    // }
    // set setCarrito(carrito: Array<ICarrito>){
    //     this.carrito = carrito;
    // }
    // get getCarrito(){
    //    return this.carrito;
    // }
    // set setEstatus(estatus: IEstatus){
    //     this.estatus = estatus;
    // }
    // get getEstatus(){
    //    return this.estatus;
    // }
    // set setSubTotal(subTotal: number){
    //     this.subTotal = subTotal;
    // }
    // get getSubTotal(){
    //    return this.subTotal;
    // }



}