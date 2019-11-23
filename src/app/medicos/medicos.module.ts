import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { MedicosRoutingModulo } from './medicos-routing.modulo';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    MedicosRoutingModulo,
    MatToolbarModule,
    HttpClientModule
  ],
  exports: [
    MedicosRoutingModulo
  ]
})
export class MedicosModule { }
