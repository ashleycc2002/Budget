import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactComponent } from './contacto/pages/Formcontact/formcontact.component';
import { FormcrudComponent } from './contacto/pages/Formcrud/formcrud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ContactInfoComponent } from './contacto/pages/contact-info/contact-info.component';
import { ContactcardComponent } from './contacto/pages/contactcard/contactcard.component';
import { FormcontactdetailsComponent } from './contacto/pages/contact-details/formcontactdetails.component';

const routes: Routes = [
  {
    path: '',
        component: MainComponent, //carga primero este component y despues lis children
    children: [
      {path: '', component: DashboardComponent, data:{ breadcrumb: 'Home'}},
      {path: 'formcontact/:id', component: FormcontactComponent, data:{ breadcrumb: 'Formulario Contacto'}},
      {path: 'formcrud', component: FormcrudComponent, data:{ breadcrumb: 'Crear Contacto'}},
      {path: 'contactinfo', component: ContactInfoComponent, data:{ breadcrumb: 'Contacto Info'}},
      {path: 'contactcard', component: ContactcardComponent, data:{ breadcrumb: 'Contacto Card'}},
      {path: 'contactdetails/:id', component: FormcontactdetailsComponent, data:{ breadcrumb: 'Contacto Detalle'}},
      {path: '**', pathMatch:'full', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
