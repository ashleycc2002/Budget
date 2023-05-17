import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from 'src/app/protected/services/contacto.service';
import { Contacto } from '../../interfaces/contacto';

@Component({
  selector: 'app-formcontactdetails',
  templateUrl: './formcontactdetails.component.html',
  styleUrls:['./formcontactdetails.component.css']
})
export class FormcontactdetailsComponent{

  private _contacto!: Contacto;

  public nombre:string = '';
  public correo:string = '';
  public apellidos?:string = '';
  public pais?:string = '';
  public movil?:string  = '';
  public direccion?:string  = '';
  public fechadecumpleano?:Date ;
  public telefono?:string = '';
  public profesion?:string = '';
  public idioma?:string = '';

  constructor(private contactoService:ContactoService, 
  private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    const id = this.route.snapshot.paramMap.get('id');
    this.contactoService.getContactObj(id).then(response =>{
    const contacto:Contacto ={...response};
    this.LoadValues(contacto);
    })


  }
 
  LoadValues(contacto:Contacto){
   this.nombre = contacto.nombre;
   this.correo = contacto.correo;
   this.apellidos = contacto.apellidos;
   this.pais = contacto.pais;
   this.movil = contacto.telefono1;
   this.direccion = contacto.direccion;
   this.telefono = contacto.telefono2;
   this.profesion = contacto.profesion;
   this.idioma = contacto.lenguage;
   this.fechadecumpleano = contacto.fechadeCumpleano;
  }

}
