import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cargarscript {

  constructor() { }

  Loadropzone(files:string[]){

    for(let file of files){

      let script = document.createElement('script');
      script.src = `src/assets/Dropzone/${file}.js`;
      let body = document.querySelector('body');


      body?.appendChild(script);
    }

  }
}
