import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError,map, delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { ContactoResponse } from 'src/app/protected/contacto/interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  
  private baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient){}

  validate(FormGroup: AbstractControl):  Observable<ValidationErrors | null> {

    const email = FormGroup.value;

    const url: string = `${this.baseUrl}/contact/mail?correo=${email}`;             
    return this.http.get<ContactoResponse>(url)
                    .pipe(
                       delay(500),
                       map( resp => {
                           if(resp.ok){
                           return {emailTomado: true}
                           }else{
                             return {emailTomado: false}
                           }
                          
                       })
                       
                    )
  }


  
  

 




    
}





