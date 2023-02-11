


export interface ISuper{
    id?: number;
}


export class Super{
    private _id?: number | undefined;

    constructor(){
        this._id = 0;
    }

        set id(_id: number){
        this._id =_id;
        }
        get id(): any{
        return this._id;
        }
}