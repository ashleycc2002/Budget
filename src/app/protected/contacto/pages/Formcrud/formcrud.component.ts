import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { ContactoService } from '../../../services/contacto.service';
import { Contacto } from '../../interfaces/contacto';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formcrud',
  templateUrl: './formcrud.component.html',
  styleUrls: ['./formcrud.component.css'],
  styles: [

  ]
})
export class FormcrudComponent {

  contactos:Contacto[] =[];
  loading:boolean=true;
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  FiltroValue: string = '';
  


  constructor(private contactoService:ContactoService,
    private authService: AuthService  ) { }

 ngOnInit(){
 debugger;
  this.loading = true;
  const user = {...this.usuario};
  this.contactoService.GetContacto(user.uid)
        .then( resp => {
          if(resp.length > 0){
            this.contactos = resp;
            this.loading = false;
          }
          else{
            this.loading = false;
          }
          
        }).catch(error => {
             if(!error.ok){
              this.loading = false;
             }
        });

  
 }


 DeleteContacto(contacto:Contacto, id:number){
  
  Swal.fire({
    title:'¿Está seguro?',
    text: `Está seguro que desea borrar a ${contacto.nombre}`,
    showConfirmButton: true,
    showCancelButton: true
 }).then( resp => {

    if(resp.value){
      this.contactos.splice(id,1);
      const user = {...this.usuario}
    
        let IdUser = user.uid;
       this.contactoService.deleteContacto(IdUser,contacto._id)
       .subscribe( ok => {
         debugger;
         console.log(ok);
       
         if( ok === true ) {
          Swal.fire({
            title:'Delete',
            text: 'Fue borrado existosamente.',
            icon:'success'
         });
          
        }else {
          Swal.fire('Error', ok , 'error');}
      
       });
    }
 });
 
}

 get usuario() {
  return this.authService.usuario;
}

 guardar(form:NgForm){
   if(form.invalid){
     console.log('Formulario no valido');
     return;
   }
   }

   handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  HandleSearch(value: string){

    this.FiltroValue = value;
  }

 }








