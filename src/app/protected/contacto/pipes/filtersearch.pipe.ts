import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearch'
})
export class filtersearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {

    if(!texto) return lista;

    return lista.filter(contacto => contacto.nombre.toUpperCase().includes(texto.toUpperCase()));
  }

}
