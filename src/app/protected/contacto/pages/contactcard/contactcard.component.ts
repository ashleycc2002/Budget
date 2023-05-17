import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ContactoService } from 'src/app/protected/services/contacto.service';
import { Contacto } from '../../interfaces/contacto';

@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.css'],
  styles: [
  ]
})
export class ContactcardComponent{

   contactos:Contacto[] =[];
   loading:boolean=true;
   page_size: number = 10;
   page_number: number = 1;
   pageSizeOptions = [5, 10, 20, 50, 100];


   constructor(private contactoService:ContactoService,
     private authService:AuthService) { }

   ngOnInit(){
   
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

   get usuario() {
     return this.authService.usuario;
   }

   handlePage(e: PageEvent){
     this.page_size = e.pageSize;
     this.page_number = e.pageIndex + 1;
   }

}
