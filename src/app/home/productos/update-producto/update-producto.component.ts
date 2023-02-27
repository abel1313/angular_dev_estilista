import { IProducto } from '../models';
import { ResponseGeneric } from './../../../dto/IResponseGeneric';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IResponseGeneric } from 'src/app/dto/IResponseGeneric';
import { ProductosService } from '../productos.service';
import { Base64, Estatus, IImagen, ISuper, IUploadSaveImagesProductos, UploadImagesProducto } from 'src/app/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileHandle } from 'src/app/core/dragDrop.directive';
import { ValidatorImages } from 'src/app/validators';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.sass']
})
export class UpdateProductoComponent implements OnInit {
  subscription: Subscription;
  formAddProducto: FormGroup;
  uploadImages: IImagen[];
  
  files: FileHandle[] = [];
  producto: IProducto = {
    id:0,
    tamanoProducto:{
      id:0,
      precioPieza:0,
      tipoPieza: '0'
    },
    estatusPieza:{
      id:0,
      activo:0
    },
    nombreProducto:''
  };
  
  prod: ResponseGeneric<IProducto> ;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ProductosService,
    private readonly fb: FormBuilder,

  ) { 

    this.subscription =  new Subscription();
    this.uploadImages = UploadImagesProducto.initUploadImagesSave();
  }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.getProducto(Number(heroId));

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

  getProducto(id: number): void{
    this.service.getDataBy<IResponseGeneric<any>,Number>('productos/findByIdProduct',id).subscribe((success)=>{
      if(success.code === "200 OK"){
        console.log(success)
        this.prod = success.datos;
        this.producto = this.service.getAllProductsMapp(success);
        this.formAddProducto.get('id')?.setValue(this.producto.id);
        this.formAddProducto.get('nombreProducto')?.setValue(this.producto.nombreProducto);
        this.formAddProducto.get('tamanoProducto.id')?.setValue(this.producto.tamanoProducto.id);
        this.formAddProducto.get('tamanoProducto.tipoPieza')?.setValue(this.producto.tamanoProducto.tipoPieza);
        this.formAddProducto.get('tamanoProducto.precioPieza')?.setValue(this.producto.tamanoProducto.precioPieza);
        this.formAddProducto.get('estatusPieza.id')?.setValue(this.producto.estatusPieza.id);
        this.formAddProducto.get('estatusPieza.activo')?.setValue(this.producto.estatusPieza.activo === 1 ? true: false) ;
        console.log(this.producto, ' as ')
      }

  


    },(error: any)=>{
      console.log(error)
    });
  }












  guardarProducto(): void{


    this.actualizar()
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
  
      console.log(producto);
  
      this.subscription.add(this.service.postData(producto,'productos/updateProductoImage').subscribe((succ)=>{
        console.log(succ)
      },(error: any)=>{
  
        console.log(error)
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
      console.log(imagenes);
      this.uploadImages = imagenes;
  
      this.formAddProducto.setValidators(ValidatorImages.validLengthImages(this.uploadImages.length));
      this.formAddProducto.updateValueAndValidity();
      this.formAddProducto.clearAsyncValidators();
    }
    private async convertirBase(file: File): Promise<string | ArrayBuffer| any> {
      if( file!){
        return await Base64.base64(file);
      }else{
        console.log(' imagen no valid')
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
