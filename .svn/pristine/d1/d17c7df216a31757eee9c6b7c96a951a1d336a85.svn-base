import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { DepartamentoComponent } from './modulos/estructuraGeneral/departamento/departamento.component';
import { PrincipalComponent } from './principal/principal.component';
import { UbicacionComponent } from './modulos/estructuraGeneral/ubicacion/ubicacion.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PuestoComponent } from './modulos/estructuraGeneral/puesto/puesto.component';

const routes: Routes = [
  {
    path: 'Dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  
  },
  {
    path: 'Acceso',
    component: AccesoComponent
  }
  ,
  { 
    path: 'Departamento', 
    component: DepartamentoComponent
  }
  ,
  { 
    path: 'Ubicacion', 
    component: UbicacionComponent
  }  
  ,
  { 
    path: 'Puesto', 
    component: PuestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
