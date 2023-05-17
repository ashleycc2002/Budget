import { Component, OnInit } from '@angular/core';
import { segundoService, valorReloj } from 'src/app/shared/validator/segundo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls:['./clock.component.css']
})
export class ClockComponent  implements OnInit{
 dato$!: Observable<valorReloj>;
 hora: number = 0;
 minutos: string = '';
 dia: string = '';
 fecha: string = '';
 ampm: string = '';
 segundos:string = '';

 constructor(private segundo: segundoService) {
 }

 ngOnInit(): void{
   this.dato$ = this.segundo.getInfoReloj();
   this.dato$.subscribe(x => {
     this.hora = x.hora;
     this.minutos = x.minutos;
     this.dia = x.diadesemana;
     this.fecha = x.diaymes,
     this.ampm = x.ampm,
     this.segundos = x.segundo
   });
 }

}
