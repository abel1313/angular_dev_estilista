import { 
    ICliente,
    ISuper,
    IUsuario } 
    from ".";



export interface IVenta extends ISuper{

    usuarioVenta: IUsuario;
    clienteVenta: ICliente;
    totalVenta: number;
    fechaVenta: string;
}