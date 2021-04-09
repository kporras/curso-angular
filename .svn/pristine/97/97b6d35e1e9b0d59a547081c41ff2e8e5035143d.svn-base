import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() descripcionSelect : string = '';
  @Input() valorSeleccionado : any;
  @Input() valorBusqueda : string = '';
  @Input() placeHolder : string = '';
  @Input() datos: any = [];
  @Input() multipleSeleccion: boolean = false;
  @Input() estado: boolean = false;


  @Output() accion = new EventEmitter();
  

//Definición 
  config = {
    displayKey: 'description', 
    search:true,
    height: 'auto',
    placeholder: '',
   // customComparator: ()=>{} // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, 
    moreText: 'more', 
    noResultsFound: 'No encontro resultados', 
    searchPlaceholder:'Buscar', 
    searchOnKey: ''
  }

  ngOnInit(): void {
    this.config = {
      displayKey: this.descripcionSelect, 
      search:true,
      height: 'auto',
      placeholder: this.placeHolder,
      limitTo: 0, 
      moreText: 'más', 
      noResultsFound: 'No encontro resultados', 
      searchPlaceholder:'Buscar', 
      searchOnKey: this.valorBusqueda
    }
  }


  selectionChanged(e){
    this.accion.emit(this.valorSeleccionado);
  }
}



// nombre del componente utilizado ngx-select-dropdown
// https://github.com/manishjanky/ngx-select-dropdown#readme