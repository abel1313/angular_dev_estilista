import { ISuper, Super } from "./ISuper.mode";




export interface IEstatus extends ISuper{

    activo: number;
}

export class Estatus extends Super{

    private _activo: number;

    constructor(){
        super();
        this._activo = 0;
    }

    set activo(_activo: number){
        this._activo = _activo;
    }
    get activo(): number{
       return this._activo;
    }
}