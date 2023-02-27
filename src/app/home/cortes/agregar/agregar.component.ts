
import { ServiceGenericoService } from 'src/app/service/service-generico.service';
import { Subscription } from 'rxjs';
import { IImagen, IUpload, IUploadImages, UploadImages } from './../../../models/IUpload';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base64 } from 'src/app/models';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { FileHandle } from 'src/app/core/dragDrop.directive';
import { ValidatorImages } from 'src/app/validators';
import { IResponseGeneric } from 'src/app/dto/IResponseGeneric';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {

  @Input() nombreCard: string = 'Agregar corte';
  @Input() nombreButton: string = 'Registrar corte';
  imagenCote: any;
  formGenerico: FormGroup;

  subscription: Subscription;


  files: FileHandle[] = [];
uploadImages: IUploadImages;

  constructor(
    private readonly fb: FormBuilder,
    private readonly sanitizer: DomSanitizer,
    private readonly service: ServiceGenericoService
  ) {

    this.uploadImages = UploadImages.initUploadImages();
    this.subscription = new Subscription();
   }

  ngOnInit(): void {

    this.formGenerico = this.fb.group(
      {
        id: [''],
        tipoCorte: this.fb.group({
          id: [''],
          nombreCorte: ['', [Validators.required]],
          precioTipoCorte: ['', [Validators.required]]
        })

      },{validators: ValidatorImages.validLengthImages(0) }
  );
  }

  onlyNumbers(oby: string ){
    this.formGenerico.get('tipoCorte.precioTipoCorte')?.setValue(oby.replace(/\D/g, ''));

  }
  guardarForm(): void{
    this.uploadImages.tipoCorte.nombreCorte = this.formGenerico.get('tipoCorte.nombreCorte')?.value;
    this.uploadImages.tipoCorte.precioTipoCorte = this.formGenerico.get('tipoCorte.precioTipoCorte')?.value;
    this.subscription.add(
      this.service.postData<IUploadImages, IResponseGeneric<Boolean>>(this.uploadImages,'cortes/saveCorte').subscribe((success: IResponseGeneric<Boolean>)=>{
        console.log(success);
        if(success.codeValue === 200 && success.datos){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: success.mensaje,
            showConfirmButton: false
          });
          this.files = [];
          this.formGenerico.reset();
          this.uploadImages = UploadImages.initUploadImages();
        }else{
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: success.mensaje,
            showConfirmButton: false
          });
        }
      },(error: IResponseGeneric<Boolean>)=>{
        console.error(error, 'ro rrrrrrrrrrrrrrrrrrrrr ' )
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.mensaje,
          showConfirmButton: false
        });
      })
    );
  }

  private async convertirBase(file: File): Promise<string | ArrayBuffer| any> {
    if( file!){
      return await Base64.base64(file);
    }else{
      console.error(' imagen no valid')
    } 
  }

  async saveFile(event: any){
    const files : File[] = event.target.files;
    if( files.length === 1){
      const file: File = files[0];
      const [name,ext] = file.name.split('.');
      if(ext != 'jpg' && ext != 'png'){
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: 'El formato seleccionado no es valido',
          showConfirmButton: false
        });

        return
      }

        const data: string = await this.convertirBase(file);
        const [formato,base64Img] = data.split(',');
        this.formGenerico.get('imagenes.nombreImagen')?.setValue(name);
        this.formGenerico.get('imagenes.extencionImagen')?.setValue(ext);
        this.formGenerico.get('imagenes.base64Imagen')?.setValue(base64Img);
  
        this.imagenCote = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/${ext};base64,${base64Img}`);
  
    }

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
    this.uploadImages.imagenes = imagenes;

    this.formGenerico.setValidators(ValidatorImages.validLengthImages(this.uploadImages.imagenes.length));
    this.formGenerico.updateValueAndValidity();
    this.formGenerico.clearAsyncValidators();
  }

  limpiarImagenes(): void{
    if( this.files.length > 0 ){
      this.files = [];
      this.formGenerico.setValidators(ValidatorImages.validLengthImages(this.files.length));
      this.formGenerico.updateValueAndValidity();
      this.formGenerico.clearAsyncValidators();
  
    }
  }

}
