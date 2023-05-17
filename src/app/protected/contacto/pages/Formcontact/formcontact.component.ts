import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormArray, FormControl } from '@angular/forms';
import { ValidotorService} from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { MensajeTextoService } from 'src/app/shared/validator/MensajeTexto.service';
import { Contacto } from '../../interfaces/contacto';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ContactoService } from 'src/app/protected/services/contacto.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { type } from 'os';
import { contactoRequest } from '../../interfaces/contactoRequest';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styles: [
  ]
})
export class FormcontactComponent implements OnInit {

  private _contacto!: Contacto;

  constructor( private fb: FormBuilder,
    private validatorService: ValidotorService,
    private emailValidator: EmailValidatorService,
    private mesageService: MensajeTextoService,
    private authService: AuthService,
    private contactoService:ContactoService,
    private router: Router,
    private route:ActivatedRoute) {

    }

  miFormulario: FormGroup = this.fb.group({
   name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)] ],
   lastname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
   email:['',[ Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
   birthdaydate:[''],
   address:['',Validators.maxLength(35)],
   phone1:['', [Validators.minLength(3),Validators.maxLength(16)]],
   phone2:['', [Validators.minLength(3),Validators.maxLength(16)]],
   country:['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
   profesion:['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
   lenguage:['',[Validators.minLength(6),Validators.maxLength(20)]],

   facebook:[false,Validators.requiredTrue],
    txtfacebook:[''],
    whasapp:[false,Validators.requiredTrue],
    txtwhasapp:[''],
    linkedin:[false,Validators.requiredTrue],
    txtlinkedin:[''],
    instagram:[false,Validators.requiredTrue],
    txtinstagram:[''],
    twitter:[false,Validators.requiredTrue],
    txttwitter:[''],
    snapchat:[false,Validators.requiredTrue],
    txtsnapchat:['']

  })


  get emialErrorsMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return this.mesageService.MsgCorreoobligatorio;
    }else if(errors?.pattern){
      return this.mesageService.MsgFormatoCorreo;
    } else if(errors?.emailTomado) {
       return this.mesageService.MsgCorreoExiste;
    }

    return '';
  }


  get nameErrorsMsg(): string {

    const errors = this.miFormulario.get('name')?.errors;
    if(errors?.required){
      return  this.mesageService.MsgNombreobligatorio;
    }
    return '';

  }
  get lastnameErrorsMsg(): string {

    const errors = this.miFormulario.get('lastname')?.errors;
    if(errors?.required){
      return this.mesageService.MsgApellidoObligatorio;
    }
    return '';

  }

 get phoneMinLengthErrorsMsg(): string {
   const phone2 = this.miFormulario.get('phone2');
      let result: string = "";

     if(phone2?.hasError('minlength')){
       return result = this.mesageService.MsgTelefonoMinimaLongitud;
     }
     else if(phone2?.hasError('maxlength')){
       return result = this.mesageService.MsgTelefonoMaximalongitud;
      }
      else
      return ''
 }

 get phone1MinLengthErrorsMsg(): string {

   const phone1 = this.miFormulario.get('phone1');
     if(phone1?.hasError('minlength')){
       return this.mesageService.MsgTelefono1MinimaLongitud;
     }
     else if(phone1?.hasError('maxlength')){
       return this.mesageService.MsgTelefono1Maximalongitud;
      }
      else
      return ''
 }

 hiddenText():void{
  let wsahp = <HTMLInputElement> document.getElementById("txtwhatsapp");
  wsahp.style.visibility = "hidden";

  let facebook = <HTMLInputElement> document.getElementById("txtfacebook");
  facebook.style.visibility = "hidden";

  let linkedin  = <HTMLInputElement> document.getElementById("txtlinkedin");
  linkedin.style.visibility = "hidden";

  let instagram = <HTMLInputElement> document.getElementById("txtinstagram");
  instagram.style.visibility ="hidden";

  let twitter = <HTMLInputElement> document.getElementById("txttwitter");
  twitter.style.visibility ="hidden";

  let snapchat = <HTMLInputElement> document.getElementById("txtsnapchat");
  snapchat.style.visibility = "hidden";

 }

 visible: boolean = false;
 switchTouchWhtsApp():void{

 const inputWhtsApp = <HTMLInputElement> document.getElementById("txtwhatsapp");
 (this.visible = !this.visible) ? inputWhtsApp.style.visibility = "visible" : inputWhtsApp.style.visibility = "hidden";

 }

 visiblefacebook: boolean = false;
 switchTouchFacebook():void{

  const inputfacebook = <HTMLInputElement> document.getElementById("txtfacebook");
  (this.visiblefacebook = !this.visiblefacebook) ? inputfacebook.style.visibility = "visible" : inputfacebook.style.visibility = "hidden";

   if(this.miFormulario.controls.txtfacebook){
    this.miFormulario.controls.txtfacebook.reset('');
   }

  }

  visibleinstagram: boolean = false;
 switchTouchInstagram():void{

  const inputinstagram = <HTMLInputElement> document.getElementById("txtinstagram");
  (this.visibleinstagram = !this.visibleinstagram) ? inputinstagram.style.visibility = "visible" :inputinstagram.style.visibility = "hidden";

   if(this.miFormulario.controls.txtinstagram){
    this.miFormulario.controls.txtinstagram.reset('');
   }

  }

  visibletwitter: boolean = false;
 switchTouchTwitter():void{

  const inputtwitter = <HTMLInputElement> document.getElementById("txttwitter");
  (this.visibletwitter = !this.visibletwitter) ? inputtwitter.style.visibility = "visible" :inputtwitter.style.visibility = "hidden";

   if(this.miFormulario.controls.txttwitter){
    this.miFormulario.controls.txttwitter.reset('');
   }

  }

  visiblesnapchat: boolean = false;
 switchTouchSnapchat():void{

  const inputsnapchat = <HTMLInputElement> document.getElementById("txtsnapchat");
  (this.visiblesnapchat = !this.visiblesnapchat) ? inputsnapchat.style.visibility = "visible" :inputsnapchat.style.visibility = "hidden";

   if(this.miFormulario.controls.txtsnapchat){
    this.miFormulario.controls.txtsnapchat.reset('');
   }

  }

  visiblelinkedin: boolean = false;
 switchTouchLinkedin():void{

  const inputlinkedin = <HTMLInputElement> document.getElementById("txtlinkedin");
  (this.visiblelinkedin = !this.visiblelinkedin) ? inputlinkedin.style.visibility = "visible" :inputlinkedin.style.visibility = "hidden";

   if(this.miFormulario.controls.txtlinkedin){
    this.miFormulario.controls.txtlinkedin.reset('');
   }

  }

 get countryErrorsMsg(): string{

  const errors = this.miFormulario.get('country')?.errors;
  const country = this.miFormulario.get('country');
  if(errors?.required){
    return this.mesageService.MsgPaisobligatorio;
  }
  else if(country?.hasError('minlength')){
    return this.mesageService.MsgPaisMinimaLongitud;
   }
   else if(country?.hasError('maxlength')){
    return this.mesageService.MsgPaisMaximalongitud;
   }

  return '';
 }

 get profesionErrorsMsg(): string {

 const errors = this.miFormulario.get('profesion')?.errors;
 const profesion = this.miFormulario.get('profesion');
 if(errors?.required){
   return this.mesageService.MsgProfesionobligatorio;
 }
 else if(profesion?.hasError('minlength')){
   return this.mesageService.MsgProfesionMinimaLongitud;
  }
  else if(profesion?.hasError('maxlength')){
    return this.mesageService.MsgProfesionMaximalongitud;
   }

 return '';

}

get lenguageErrorsMsg(): string {

  const lenguage = this.miFormulario.get('lenguage');
  if(lenguage?.hasError('minlength')){
    return this.mesageService.MsgLenguajeMinimaLongitud;
  }
  else if(lenguage?.hasError('maxlength')){
    return this.mesageService.MsgLenguajeMaximaLongitud;
   }
   else
   return ''

}

get addressErrorsMsg(): string {

  const address = this.miFormulario.get('address');
  if(address?.hasError('maxlength')){
    return this.mesageService.MsgDirreccionMaximaLongitud;
  }

   else
   return ''

}

LoadValues(contacto:Contacto){

 const datepipe: DatePipe = new DatePipe('en-US')
 let formattedDate = datepipe.transform(contacto.fechadeCumpleano, 'YYYY-MM-dd')

     this.miFormulario.setValue(

       {
         name: contacto.nombre,
         lastname:contacto.apellidos,
         email: contacto.correo,
         birthdaydate: formattedDate,
         address: contacto.direccion,
         phone1: contacto.telefono1,
         phone2:contacto.telefono2,
         country:contacto.pais,
         profesion:contacto.profesion,
         lenguage:contacto.lenguage,
         facebook:contacto.redSociales?.facebook.facebook,
         txtfacebook:contacto.redSociales?.facebook.txtfacebook,
         whasapp:contacto.redSociales?.whasapp.whasapp,
         txtwhasapp:contacto.redSociales?.whasapp.txtwhasapp,
         linkedin:contacto.redSociales?.linkedin.linkedin,
         txtlinkedin:contacto.redSociales?.linkedin.txtlinkedin,
         instagram:contacto.redSociales?.instagram.instagram,
         txtinstagram:contacto.redSociales?.instagram.txtinstagram,
         twitter:contacto.redSociales?.twitter.twitter,
         txttwitter:contacto.redSociales?.twitter.txttwitter,
         snapchat:contacto.redSociales?.snapchat.snapchat,
         txtsnapchat:contacto.redSociales?.snapchat.txtsnapchat
       }
     );


     const inputlinkedin = <HTMLInputElement> document.getElementById("txtlinkedin");
     this.miFormulario.controls.txtlinkedin.value != null ? inputlinkedin.style.visibility = "visible" :  inputlinkedin.style.visibility = "hidden";

     const inputWhtsApp = <HTMLInputElement> document.getElementById("txtwhatsapp");
     this.miFormulario.controls.txtwhasapp.value != null ?  inputWhtsApp.style.visibility = "visible":  inputWhtsApp.style.visibility = "hidden";

     const inputfacebook = <HTMLInputElement> document.getElementById("txtfacebook");
    this.miFormulario.controls.txtfacebook.value != null ? inputfacebook.style.visibility = "visible": inputfacebook.style.visibility = "hidden";

     const inputtwitter = <HTMLInputElement> document.getElementById("txttwitter");
    this.miFormulario.controls.txttwitter.value != null ? inputtwitter.style.visibility = "visible" :inputtwitter.style.visibility = "hidden";

     const inputinstagram = <HTMLInputElement> document.getElementById("txtinstagram");
     this.miFormulario.controls.txtinstagram.value != null ? inputinstagram.style.visibility = "visible":inputinstagram.style.visibility = "hidden";

     const inputsnapchat = <HTMLInputElement> document.getElementById("txtsnapchat");
     this.miFormulario.controls.txtsnapchat.value != null ? inputsnapchat.style.visibility = "visible":inputsnapchat.style.visibility = "hidden";

}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){

    this.contactoService.getContactObj(id).then(response => {
   
      const contacto:Contacto = {...response};

      this.LoadValues(contacto);
    })

   }

     this.miFormulario.reset({
     
    })

    this.hiddenText();
  }

  campoNoValido(campo: string) : boolean | null {
    return  this.miFormulario.controls[campo].errors
     && this.miFormulario.controls[campo].touched
  }

  get usuario() {
    return this.authService.usuario;
  }

   CrearContacto(){

  const id = this.route.snapshot.paramMap.get('id');
  const formValue = {...this.miFormulario.value};
  const user = {...this.usuario}

   const contacto:Contacto = {
    _id: '',
    User_id: user.uid,
    nombre: formValue.name,
    apellidos: formValue.lastname,
    correo: formValue.email,
    direccion: formValue.address,
    pais: formValue.country,
    fechadeCumpleano: new Date(formValue.birthdaydate),
    telefono1: formValue.phone1,
    telefono2: formValue.phone2,
    profesion: formValue.profesion,
    lenguage: formValue.lenguage,
    redSociales: {
      facebook: { facebook: formValue.facebook, txtfacebook: formValue.txtfacebook },
      whasapp: { whasapp: formValue.whasapp, txtwhasapp: formValue.txtwhasapp },
      linkedin: { linkedin: formValue.linkedin, txtlinkedin: formValue.txtlinkedin },
      instagram: { instagram: formValue.instagram, txtinstagram: formValue.txtinstagram },
      twitter: { twitter: formValue.twitter, txttwitter: formValue.txttwitter },
      snapchat: { snapchat: formValue.snapchat, txtsnapchat: formValue.txtsnapchat }
    }

  }

  if(id == 'nuevo'){

    const contactoRequest:contactoRequest = {

      User_id: user.uid,
      nombre: formValue.name,
      apellidos: formValue.lastname,
      correo: formValue.email,
      direccion: formValue.address,
      pais: formValue.country,
      fechadeCumpleano: new Date(formValue.birthdaydate),
      telefono1: formValue.phone1,
      telefono2: formValue.phone2,
      profesion: formValue.profesion,
      lenguage: formValue.lenguage,
      redSociales: {
        facebook: { facebook: formValue.facebook, txtfacebook: formValue.txtfacebook },
        whasapp: { whasapp: formValue.whasapp, txtwhasapp: formValue.txtwhasapp },
        linkedin: { linkedin: formValue.linkedin, txtlinkedin: formValue.txtlinkedin },
        instagram: { instagram: formValue.instagram, txtinstagram: formValue.txtinstagram },
        twitter: { twitter: formValue.twitter, txttwitter: formValue.txttwitter },
        snapchat: { snapchat: formValue.snapchat, txtsnapchat: formValue.txtsnapchat }
      }

    }
     this.contactoService.crearContacto(contactoRequest)
                  .subscribe( ok => {
                    debugger;
                     if( ok === true ) {
                       debugger;
                      Swal.fire({
                        title:contacto.nombre,
                        text: 'Fue guardado existosamente.',
                        icon: 'success'
                     });
                       this.router.navigateByUrl('/contacto/formcrud');
                    }else {
                      Swal.fire('Error', ok , 'error');
                       this.miFormulario.reset();
                       this.hiddenText();
                                            }

                   });

         }

         else if(id != 'nuevo')
         {
           let Id:any = id;
          contacto._id = Id;
          this.contactoService.UpdateContacto(contacto)
                  .subscribe( ok => {
                    debugger;
                     if( ok === true ) {
                      debugger;
                      Swal.fire({
                        title:contacto.nombre,
                        text: 'Fue actualizado existosamente.',
                        icon: 'success'
                     });
                       this.router.navigateByUrl('/contacto/formcrud');
                    }else {
                      Swal.fire('Error', ok , 'error');
                       this.miFormulario.reset();
                       this.hiddenText();
                                            }

                   });

         }
    }

}


