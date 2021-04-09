import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendario-rango-fechas',
  templateUrl: './calendario-rango-fechas.component.html',
  styleUrls: ['./calendario-rango-fechas.component.scss']
})
export class CalendarioRangoFechasComponent implements OnInit {

  
  constructor() { }

  @Input() valorFechaInicio :  Date;
  @Input() valorFechaFin : Date;
  @Input() estado: boolean = false;

  @Output() accion = new EventEmitter();
  
  rangoFecha = new FormGroup({
    diaInicio: new FormControl(),
    diaFin: new FormControl()
  });



  ngOnInit(): void {
    this.rangoFecha.get('diaInicio').setValue(this.valorFechaInicio);
    this.rangoFecha.get('diaFin').setValue(this.valorFechaFin);

    console.log("rangoFecha" + this.rangoFecha.get('diaInicio').value);
    console.log("rangoFecha" + this.rangoFecha.get('diaFin').value);


  }

   selectionChanged(e){
     console.log('diaInicio',this.rangoFecha.get('diaInicio').value);
     console.log('diaFin',this.rangoFecha.get('diaFin').value);
 
     this.accion.emit(this.rangoFecha.value);
   }

}