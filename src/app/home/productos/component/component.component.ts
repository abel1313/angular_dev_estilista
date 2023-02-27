import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { IUploadImagesProductos, IUploadSaveImagesProductos, UploadImagesProducto } from './../../../models/IUpload';
import { ISuper } from 'src/app/models/ISuper.mode';

import { Estatus } from './../../../models/IEstatus';

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProducto } from '../models';
import { Producto } from '../models/IProducto.model';
import { FileHandle } from 'src/app/core/dragDrop.directive';
import { Base64, IImagen, IUploadImages, UploadImages } from 'src/app/models';
import { ValidatorImages } from 'src/app/validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.sass']
})
export class ComponentComponent implements OnInit {
  formAddProducto: FormGroup;
  @Input() tituloComponente: string = '';
  @Input() tituloBtn: string = '';
  @Input() producto: IProducto;
  uploadImages: IImagen[];
  subscription: Subscription;
  files: FileHandle[] = [];
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: ServiceGenericoService
  ) {
    this.subscription = new Subscription();
    this.uploadImages = UploadImagesProducto.initUploadImagesSave();
   }

  private getFormProducto(): void{
    if( !this.producto!){
      this.producto = Producto.iniciarProducto();
    }
  }
  ngOnInit(): void {
this.getFormProducto();
   
    this.formAddProducto = this.fb.group({
      id:[this.producto.id],
      nombreProducto: [this.producto.nombreProducto,[Validators.required]],
      tamanoProducto: this.fb.group({
        id:[this.producto.tamanoProducto.id],
        tipoPieza: [this.producto.tamanoProducto.tipoPieza,[Validators.required]],
        precioPieza: [this.producto.tamanoProducto.precioPieza,[Validators.required, Validators.min(1)]],
      }),
      estatusPieza: this.fb.group({
        id:[this.producto.estatusPieza.id],
        activo: [this.producto.estatusPieza.activo === 1 ? true : false,[Validators.required]]
      })
    },{validators: ValidatorImages.validLengthImages(0) });
  }


  guardarProducto(): void{


    this.actualizar()
  }

  guardar(): void{

  }
actualizar(): void{
  let productoExample = this.getInitProducto();
  const valor = this.formAddProducto.get('estatusPieza.activo')?.value ? 1: 0 ;
  const productoGuardar = this.formAddProducto?.value;
  productoExample = this.formAddProducto?.value;
  productoExample.estatusPieza.activo = valor;
  const estatus: Estatus = productoGuardar.estatus;

  const producto: IUploadSaveImagesProductos = {
    producto: this.formAddProducto.value,
    list: this.uploadImages
  }

  producto.producto.estatusPieza.id = producto.producto.estatusPieza.activo == 1 ? 1 : 2;


    this.subscription.add(this.service.postData(producto,'productos/saveProductoImage').subscribe((succ)=>{
    },(error: any)=>{

      console.error(error)
    }));

  }


  filesDropped(files: FileHandle[]) {
    this.files = files;
    const imagenes : IImagen [] = this.files.map(m=>{
      const [name,ext] = m.file.name.split('.');
      let img : IImagen ={
        base64Imagen: '',
        extencionImagen: '',
        nombreImagen: ''
      };
      this.convertirBase(m.file).then((dat)=>{
        const [formato,base64Img] = dat.split(',');
        img.nombreImagen = name;
        img.extencionImagen = ext;
        img.base64Imagen = base64Img;
      });
      return img;
    }); 
    this.uploadImages = imagenes;

    this.formAddProducto.setValidators(ValidatorImages.validLengthImages(this.uploadImages.length));
    this.formAddProducto.updateValueAndValidity();
    this.formAddProducto.clearAsyncValidators();
  }
  private async convertirBase(file: File): Promise<string | ArrayBuffer| any> {
    if( file!){
      return await Base64.base64(file);
    }else{
      console.error(' imagen no valid')
    } 
  }
  getInitProducto(): IProd{
    return {
      id: 0,
      nombreProducto: '',
      estatusPieza:{
        activo:0
      },
      tamanoProducto:{
        precioPieza: 0,
        tipoPieza: ''
      }
    }
  }

}

export interface IProd extends ISuper{
  nombreProducto: string;
  tamanoProducto: ITamanioProducto;
  estatusPieza: IEstatus;
}
export interface ITamanioProducto extends ISuper{
  tipoPieza: string;
  precioPieza: number;
}
export interface IEstatus extends ISuper{
  activo: number;
}
