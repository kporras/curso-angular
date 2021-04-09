import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent implements OnInit {

  constructor() { }

  @Input() valorSeleccionado : any;
  @Input() nombre: String = '';
  @Input() requerido: boolean = false;
  @Input() estado: boolean = false;


  @Output() accion = new EventEmitter();



  ngOnInit(): void {
   
  }

  selectionChanged(e){
    this.accion.emit(this.valorSeleccionado);
  }


}