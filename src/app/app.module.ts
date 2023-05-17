import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as $ from "jquery";
import { SharedModule } from './shared/shared.module';
import { cargarscript } from './shared/validator/services.cargarscript';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [cargarscript],
  bootstrap: [AppComponent]
})
export class AppModule { }
