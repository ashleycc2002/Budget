import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import {catchError, map, tap} from 'rxjs/operators'
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario }
  }

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string ) {

    const url: string = `${this._baseUrl}/auth/new`;
    const body ={name, email, password }

     return this.http.post<AuthResponse>(url, body)
            .pipe(
              tap( resp => {  //operador que ejecuta  primero esta sentencia y despues los otros operadores
                   if(resp.ok){
                     localStorage.setItem('token', resp.token!);
                    /* this._usuario = {
                       name: resp.name!,
                       uid: resp.uid!
                     }*/
                   }
              }),
              map( resp => resp.ok),
              catchError( err => of(err.error.msg)
              )
            );

  }

  login(email:string, password:string){

    const url: string = `${this._baseUrl}/auth`;
    const body ={ email, password }

     return this.http.post<AuthResponse>(url, body)
            .pipe(
              tap( resp => {  //operador que ejecuta  primero esta sentencia y despues los otros operadores
                   if(resp.ok){
                     localStorage.setItem('token', resp.token!);
                     /*this._usuario = {
                       name: resp.name!,
                       uid: resp.uid!
                     }*/
                   }
              }),
              map( resp => resp.ok),
              catchError( err => of(err.error.msg)
              )
            );

  }


  validarToken(): Observable<boolean> {

    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
          .set('x-token', localStorage.getItem('token') || '');

          return this.http.get<AuthResponse>(url, {headers})
                 .pipe(
                  map( resp => {

                    localStorage.setItem('token', resp.token!);
                    this._usuario = {
                      name: resp.name!,
                      uid: resp.uid!,
                      email: resp.email!
                    }
                    return resp.ok;
                  }),
                  catchError( err => of(false))
                 );
  }

  logout(){
    localStorage.removeItem('token');
  }

}
