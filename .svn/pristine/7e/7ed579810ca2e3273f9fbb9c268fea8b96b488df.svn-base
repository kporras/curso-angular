import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  @Input() valorFecha: any;
  @Input() estado: boolean = false;

  @Output() accion = new EventEmitter();

  ngOnInit(): void {
  }

  selectionChanged(e){
    console.log(this.valorFecha);
    this.accion.emit(this.valorFecha);
  }

}
