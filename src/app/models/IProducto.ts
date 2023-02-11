import { IEstatus } from 'src/app/models';
import { Estatus } from './IEstatus';
import { Super } from './ISuper.mode';
import { TamanioProducto } from './ITamanioProducto';
import { ISuper, ITamanioProducto } from ".";



export interface IProducto extends ISuper{

    nombreProducto: string;
    tipoPieza: ITamanioProducto;
    estatusPieza: IEstatus;

}

export class Producto extends Super{

    private _nombreProducto: string;
    private _tamanoProducto: TamanioProducto;
    private _estatusPieza: Estatus;

    constructor(){
        super();
        this._nombreProducto = '';
        this._tamanoProducto = new TamanioProducto();
        this._estatusPieza = new Estatus();
    }

    set nombreProducto(_nombreProducto: string) {
        this._nombreProducto = _nombreProducto;
    }

    get nombreProducto(): string {
        return this._nombreProducto;
    }


    set tamanoProducto(_tamanoProducto: TamanioProducto){
        this._tamanoProducto = _tamanoProducto;
    } 

    get tamanoProducto(): TamanioProducto{
        return this._tamanoProducto;
    } 

    set estatusPieza(_estatusPieza: Estatus){
        this._estatusPieza = _estatusPieza;
    }
    get estatusPieza(): Estatus{
        return this._estatusPieza;
    }

}