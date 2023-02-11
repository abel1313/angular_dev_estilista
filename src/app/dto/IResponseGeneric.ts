


export interface IResponseGeneric<T>{
    code: string;
    codeValue: number;
    datos: T;
    mensaje: string;
}


export class ResponseGeneric<T>{
    code: string;
    codeValue: number;
    datos: T;
    mensaje: string;


}