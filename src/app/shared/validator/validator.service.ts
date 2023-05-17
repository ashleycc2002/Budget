import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidotorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+$)';
  public nombrePattern: string = "[a-zA-Z]+";
  public ApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public PhonePattern: string = "/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/";

  constructor() { }

  noPuedeSerStrider(control: FormControl):ValidationErrors | null {

     const valor:string = control.value?.trim().toLowerCase();

     if(valor == 'strider'){
         noStrider: true;
     }

     return null; 
  }

  campoIguales(field1:string, field2: string){

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if(pass1 !== pass2){
        formGroup.get(field2)?.setErrors({noIguales: true});
        return {noIguales: true}
      }

      formGroup.get(field2)?.setErrors(null);

      return null;
    }


  }

}
