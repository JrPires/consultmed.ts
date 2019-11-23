import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [{
  path: '',
  component: ListarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class MedicosRoutingModulo { }
