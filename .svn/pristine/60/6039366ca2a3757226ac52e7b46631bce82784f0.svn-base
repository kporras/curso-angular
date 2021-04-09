import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() color: ThemePalette ;
  @Input() modo: ProgressSpinnerMode  = 'determinate';
  @Input() valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
