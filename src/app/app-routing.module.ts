import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: 'contacto',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
  {
    path: '**',
    redirectTo: '/contacto/formcontact'
  },
  {
    path: '**',
    redirectTo: '/contacto/formcrud'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: false  // para resolver el problema de navegacion  en el backend de node debe estar en true.
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
