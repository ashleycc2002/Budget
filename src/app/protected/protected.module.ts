import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormcontactComponent } from './contacto/pages/Formcontact/formcontact.component';
import { FormcrudComponent } from './contacto/pages/Formcrud/formcrud.component';
import { ContactInfoComponent } from './contacto/pages/contact-info/contact-info.component';
import { ContactcardComponent } from './contacto/pages/contactcard/contactcard.component';
import { FormsModule } from '@angular/forms';
import { FormcontactdetailsComponent } from './contacto/pages/contact-details/formcontactdetails.component';
import { PaginatePipe } from './contacto/pipes/paginate.pipe';

/* Angular Material */
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomerMatPaginatorIntl } from '../shared/validator/paginator-es';

import{ MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCarouselModule } from '@ngmodule/material-carousel';
import 'animate.css';
import { filtersearchPipe } from './contacto/pipes/filtersearch.pipe';

import { ClockComponent } from './clock/clock.component';
import { segundoService } from '../shared/validator/segundo.service';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    FormcontactComponent,
    FormcrudComponent,
    ContactInfoComponent,
    ContactcardComponent,
    FormcontactdetailsComponent,
    ClockComponent,
    PaginatePipe,
    filtersearchPipe
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BreadcrumbModule,
    MatCarouselModule.forRoot()


  ], providers: [
     {
       provide: MatPaginatorIntl,
       useClass: CustomerMatPaginatorIntl
     },
     segundoService
  ]
})
export class ProtectedModule { }
