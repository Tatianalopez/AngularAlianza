import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientTablaComponent } from './components/cliente-tabla/client-tabla.component';
import { ClientSearchComponent } from './components/cliente-search/client-search.component';
import { ClienteAgregarComponent } from './components/cliente-agregar/cliente-agregar.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';




@NgModule({
  declarations: [
    PorPaisComponent,
    ClientSearchComponent,
    ClientTablaComponent,
    ClienteAgregarComponent
  ],
  exports: [
    PorPaisComponent,
    ClienteAgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
