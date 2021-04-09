import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PuestoComponent } from './puesto/puesto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';


@NgModule({
  declarations: [
    DepartamentoComponent,
    PuestoComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DepartamentoComponent,
    PuestoComponent,
    UbicacionComponent
  ]
})
export class EstructuraGeneralModule { }
