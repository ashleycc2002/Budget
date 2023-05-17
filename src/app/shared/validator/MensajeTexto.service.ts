import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MensajeTextoService {

  public MsgCorreoobligatorio: string = 'El correo es obligatorio';
  public MsgFormatoCorreo: string = 'El valor ingresado no tiene fotmato de correo'
  public MsgCorreoExiste: string = 'El correo ya existe';
  public MsgNombreobligatorio : string = 'El nombre es obligatorio';
  public MsgFormatoNombre: string = 'Debe solo introducir un nombre';
  public MsgApellidoObligatorio: string = "El apellido es obligatorio";
  public MsgFormatoApellido: string = "Debe solo introducir dos apellido";
  public MsgTelefonoMinimaLongitud: string = "El telefono debe de ser minimo de 3 caracteres";
  public MsgTelefonoMaximalongitud: string = "El telefono debe de ser maximo de 16 caracteres";
  public MsgTelefono1MinimaLongitud: string = "El telefono debe de ser minimo de 3 caracteres";
  public MsgTelefono1Maximalongitud: string = "El telefono debe de ser maximo de 16 caracteres";
  public MsgPaisobligatorio: string = 'El pais es obligatorio';
  public MsgPaisMinimaLongitud: string = 'El pais debe de ser minimo de 3 caracteres';
  public MsgPaisMaximalongitud: string = 'El pais debe de ser maximo de 20 caracteres';
  public MsgProfesionobligatorio: string = 'La profesion es obligatoria';
  public MsgProfesionMinimaLongitud: string = 'La profesion debe de ser minimo de 3 caracteres';
  public MsgProfesionMaximalongitud: string = 'La profesion debe de ser maximo de 20 caracteres';
  public MsgLenguajeMinimaLongitud: string = 'El idioma debe de ser minimo de 3 caracteres';
  public MsgLenguajeMaximaLongitud: string = 'El idioma debe de ser maximo de 20 caracteres';
  public MsgDirreccionMaximaLongitud: string = 'La dirreccion debe de ser maximo de 35 caracteres';
}
