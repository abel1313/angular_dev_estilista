import { Super } from './ISuper.mode';
import { ISuper } from ".";



export interface ITamanioProducto extends ISuper{

    
    tipoPieza: string;
    
    precio: number;
}

export class TamanioProducto extends Super{

    private _tipoPieza: string;
    private _precioPieza: number;

    constructor(){
       super();
        this._tipoPieza = '';
        this._precioPieza =0;
    }
    set setTipoPieza(_tipoPieza:string){
        this._tipoPieza = _tipoPieza;
    }
    get getTipoPieza(): string{
        return this._tipoPieza;
    }

    set setPrecioPieza(_precioPieza:number){
        this._precioPieza = _precioPieza;
    }
    get getPrecioPieza(): number{
        return this._precioPieza;
    }


}