import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui.module';

//SERVICIOS
import { DatosService } from './compartido/servicios/datos.service';
import { AuthService } from './compartido/servicios/auth.service';




//COMPONENTES
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { AccesoComponent } from './acceso/acceso.component';
import { TextInputComponent } from './compartido/controles/text-input/text-input.component';
import { BotonComponent } from './compartido/controles/boton/boton.component';
import { CalendarioComponent } from './compartido/controles/calendario/calendario.component'
import { SelectComponent } from './compartido/controles/select/select.component';
import { ToogleComponent } from './compartido/controles/toogle/toogle.component';
import { CheckboxComponent } from './compartido/controles/checkbox/checkbox.component';
import { CalendarioRangoFechasComponent } from './compartido/controles/calendario-rango-fechas/calendario-rango-fechas.component';
import { RadioButtonComponent } from './compartido/controles/radio-button/radio-button.component';


import { SelectDropDownModule } from 'ngx-select-dropdown';
import { DepartamentoComponent } from './modulos/estructuraGeneral/departamento/departamento.component';
import { UbicacionComponent } from './modulos/estructuraGeneral/ubicacion/ubicacion.component';
import { DialogBoxComponent } from './compartido/controles/dialog-box/dialog-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PuestoComponent } from './modulos/estructuraGeneral/puesto/puesto.component';
import { SpinnerComponent } from './compartido/controles/spinner/spinner.component';
import { BottomSheetComponent } from './compartido/controles/bottom-sheet/bottom-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AccesoComponent,
    TextInputComponent,
    BotonComponent,
    CalendarioComponent,
    SelectComponent,
    ToogleComponent,
    CheckboxComponent,
    CalendarioRangoFechasComponent,
    RadioButtonComponent,
    DepartamentoComponent,
    UbicacionComponent,
    DialogBoxComponent,
    DashboardComponent,
    PuestoComponent,
    SpinnerComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    AppUiModule,
    FlexLayoutModule
    
  ],
  providers: [
    DatosService,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
