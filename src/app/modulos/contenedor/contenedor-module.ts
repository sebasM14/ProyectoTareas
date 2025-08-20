import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoLand } from './cuerpo-land/cuerpo-land';
import { CabaceraLand } from './cabacera-land/cabacera-land';
import { CuerpoDash } from './dash/cuerpo-dash/cuerpo-dash';
import { CabeceraDash } from './dash/cabecera-dash/cabecera-dash';
import { BarraLateralDash } from './dash/barra-lateral-dash/barra-lateral-dash';
import { PieDash } from './dash/pie-dash/pie-dash';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    CuerpoLand,
    CabaceraLand,
    CuerpoDash,
    CabeceraDash,
    BarraLateralDash,
    PieDash
  ],
  imports: [
    CommonModule,
     RouterModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule,
    ReactiveFormsModule,

  ],
  exports: [
    CuerpoLand,
    CabaceraLand,
    CuerpoDash,
    CabeceraDash,
    BarraLateralDash,
    PieDash
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] // 🔹 Permite usar <swiper> como Web Component

})
export class ContenedorModule { }
