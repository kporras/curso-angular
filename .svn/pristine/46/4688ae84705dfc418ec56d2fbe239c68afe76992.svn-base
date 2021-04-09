import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() requerido: boolean = false;
  @Input() opciones: any = [];
  @Input() estado: boolean = false;
  @Input() color: any;
  @Input() opcionSeleccionada : any;
  @Output() accion = new EventEmitter();

  constructor() { }

  selectionChanged(e){
    this.accion.emit(e.value.id);
    console.log(e.value.id);
  }

  ngOnInit(): void {
      
  }

}
