import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Contacto, ContactoResponse} from '../contacto/interfaces/contacto';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Key } from 'protractor';
import { contactoRequest } from '../contacto/interfaces/contactoRequest';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private baseUrl:string = environment.baseUrl;
  private _contacto!: Contacto;

  get contacto() {
    return { ...this._contacto}
  }
 
  constructor(private http:HttpClient) { 
  }

  crearContacto(contacto:contactoRequest ) {

    const url: string = `${this.baseUrl}/contact/new`;
    const body ={...contacto}
    return this.http.post<ContactoResponse>(url, body)
            .pipe(
              tap( resp =>  { 
                if(resp.ok){
                  this._contacto = {
                    _id: resp._id!,
                    nombre: resp.nombre!,
                    correo: resp.correo!
                  }
                }
           }),
           map( resp => resp.ok),
           catchError( err => of(err.error.msg)
           )
         );       
  }

   UpdateContacto(contacto:Contacto){
   
    const url: string = `${this.baseUrl}/contact/update`
    const body ={...contacto}
    return this.http.patch<ContactoResponse>(url, body)
            .pipe(
              tap( resp =>  { 
                if(resp.ok){
                  this._contacto = {
                    _id: resp._id!,
                    nombre: resp.nombre!,
                    correo: resp.correo!
                  }
                }
           }),
           map( resp => resp.ok),
           catchError( err => of(err.error.msg)
           )
         );       
   }

   async GetContacto(user_id:string){
  
    let contact: any;
    const url: string = `${this.baseUrl}/contact/UserId/?User_id=${user_id}`;
  
      await  this.http.get(url).pipe(map(response => response))
    .toPromise().then((response) => {
      contact = response;
   }).catch(e => console.error(e));
   return contact;
   
  }

 GetContactoById(_id:string | null):Observable<Contacto> {

    const url: string = `${this.baseUrl}/contact/Id/?_id=${_id}`;
         return this.http.get<Contacto>(url)
              
 }

async getContactObj(_id:string | null){
 
  let contact: any;
  const url: string = `${this.baseUrl}/contact/Id/?_id=${_id}`;

  await  this.http.get(url).pipe(map(response => response))
  .toPromise().then((response) => {
    contact = response;
 }).catch(e => console.error(e));
 return contact;

   
}


deleteContacto(userId:string,  _id:string | null){
 
  const url: string = `${this.baseUrl}/contact/delete?User_id=${userId}&_id=${_id}`;

  return this.http.delete<ContactoResponse>(url)
        .pipe(
         map( resp => resp.ok),
         catchError( err => of(err.error.msg)
         )
       );       
}

}

  

