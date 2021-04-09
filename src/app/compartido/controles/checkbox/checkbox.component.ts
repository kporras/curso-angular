import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label: String = '';
  @Input() valor: String = '';
  @Input() placeHolder: String = '';
  @Input() estado: boolean = false;
  @Input() requerido: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}