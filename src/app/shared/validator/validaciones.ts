import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
export const emailPattern: string = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/'; 

export const NoPuedeSerString = ( control: FormControl) => {
  const valor:string = control.value?.trinm().toLowerCase();

  if(valor === 'strider'){
    return { noStrider: true}
  }

   return null; 
}

