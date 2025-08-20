import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ContenedorModule } from './modulos/contenedor/contenedor-module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    ContenedorModule,
    ToastrModule.forRoot()
    

    

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  
       BsModalService

  ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [App]
})
export class AppModule { }
