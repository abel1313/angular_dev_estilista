import { ITipoCorte } from './ITipoCorte';
import { ISuper } from './ISuper.mode';
import { IProducto } from './IProducto';



export interface IUpload extends ISuper{

    tipoCorte: ITipoCorte;
    imagenes: IImagen;

}

export interface IUploadImages extends ISuper{
    tipoCorte: ITipoCorte;
    imagenes: IImagen [];
}

export interface IUploadImagesProductos extends ISuper{
    producto: IProducto;
    imagenes: IImagen [];
    page:number;
    size:number;
}

export interface IUploadSaveImagesProductos extends ISuper{
    producto: IProducto;
    list: IImagen []
}

export class UploadImages{

    static initUploadImages(): IUploadImages{
        return {
            imagenes: [],
            tipoCorte:{
                nombreCorte: '',
                precioTipoCorte: 0
            }
        }
    }
}


export class UploadImagesProducto{

    static initUploadImagesSave(): IImagen[]{
        return [];

}
}



export interface IImagen extends ISuper{

    nombreImagen: string;
    extencionImagen: string;
    base64Imagen: string;
}



export interface IImagenesDto extends ISuper{

    tipoCorte: ITipoCorte;
    imagenes: IImagen [];
}