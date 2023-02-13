import { ITipoCorte } from './ITipoCorte';
import { ISuper } from './ISuper.mode';



export interface IUpload extends ISuper{

    tipoCorte: ITipoCorte;
    imagenes: IImagen;

}

export interface IUploadImages extends ISuper{
    tipoCorte: ITipoCorte;
    imagenes: IImagen [];
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



export interface IImagen extends ISuper{

    nombreImagen: string;
    extencionImagen: string;
    base64Imagen: string;
}



export interface IImagenesDto extends ISuper{

    tipoCorte: ITipoCorte;
    imagenes: IImagen [];
}