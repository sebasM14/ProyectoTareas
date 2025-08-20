import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraDash } from './modulos/contenedor/dash/cabecera-dash/cabecera-dash';

const routes: Routes = [
    // Ruta principal (pública)
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  

  { path: 'home', component: CabeceraDash },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
