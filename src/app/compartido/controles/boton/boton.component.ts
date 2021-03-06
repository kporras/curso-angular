import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Input() nombre: String = '';
  @Input() estilo: String = '';
  @Input() estado: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Output() accion = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(e){
    this.accion.emit();
  }

}
