import { MatPaginatorIntl } from "@angular/material/paginator";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomerMatPaginatorIntl extends MatPaginatorIntl {

  constructor(){
    super();
  }

  itemsPerPageLabel: string = 'contacto por página:';
  nextPageLabel: string = 'Página siguiente';
  previousPageLabel: string = 'Página anterior';
  firstPageLabel: string = 'Primera página';
  lastPageLabel: string = 'última página';

getRangeLabel = (page: number, pageSize: number, length: number) => {

  if(length === 0 || pageSize === 0 ){
    return `0 de ${length}`;
  }

  length = Math.max(length,0);
  const startIndex = page * pageSize;
  const endIndex = startIndex < length ? Math.min(startIndex * pageSize, length): startIndex + pageSize ;
  return `${startIndex + 1} - ${endIndex} de ${length}`;
}

}
